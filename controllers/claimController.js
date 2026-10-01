const Claim = require('../models/Claim');
const Item = require('../models/Item');

exports.createClaim = async (req, res) => {
  try {
    const { itemId, proofDescription } = req.body;

    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found.' });
    }

    if (item.createdBy.toString() === req.user._id.toString()) {
      return res.status(400).json({ message: 'Cannot submit a claim on an item you reported.' });
    }

    const existingClaim = await Claim.findOne({ item: itemId, claimant: req.user._id });
    if (existingClaim) {
      return res.status(400).json({ message: 'You have already filed a claim for this item.' });
    }

    const claim = new Claim({
      item: itemId,
      claimant: req.user._id,
      proofDescription
    });

    const createdClaim = await claim.save();
    item.status = 'Claim Pending';
    await item.save();

    res.status(201).json(createdClaim);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getItemClaims = async (req, res) => {
  try {
    const claims = await Claim.find({ item: req.params.itemId })
      .populate('claimant', 'name email phone')
      .populate('item');
    res.json(claims);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyClaims = async (req, res) => {
  try {
    const claims = await Claim.find({ claimant: req.user._id })
      .populate('item')
      .sort({ createdAt: -1 });
    res.json(claims);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateClaimStatus = async (req, res) => {
  try {
    const { status, adminNotes } = req.body;
    const claim = await Claim.findById(req.params.id).populate('item');

    if (!claim) {
      return res.status(404).json({ message: 'Claim record not found.' });
    }

    const item = await Item.findById(claim.item._id);

    if (item.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized to update this claim.' });
    }

    claim.status = status;
    if (adminNotes) claim.adminNotes = adminNotes;
    await claim.save();

    if (status === 'Approved') {
      item.status = 'Resolved';
      await item.save();

      // Reject remaining claims automatically
      await Claim.updateMany(
        { item: item._id, _id: { $ne: claim._id } },
        { status: 'Rejected', adminNotes: 'Another claim was approved for this item.' }
      );
    } else if (status === 'Rejected') {
      const remainingPending = await Claim.find({
        item: item._id,
        status: 'Pending',
        _id: { $ne: claim._id }
      });
      if (remainingPending.length === 0) {
        item.status = 'Open';
        await item.save();
      }
    }

    res.json(claim);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
