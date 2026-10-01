const Item = require('../models/Item');

exports.getItems = async (req, res) => {
  try {
    const { category, type, status, search } = req.query;
    let query = {};

    if (category) query.category = category;
    if (type) query.type = type;
    if (status) query.status = status;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } }
      ];
    }

    const items = await Item.find(query)
      .populate('createdBy', 'name email phone')
      .sort({ createdAt: -1 });

    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('createdBy', 'name email phone');
    if (!item) {
      return res.status(404).json({ message: 'Item record not found.' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createItem = async (req, res) => {
  try {
    const { title, category, type, description, location, dateOccurred } = req.body;
    let imageUrl = '';

    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    }

    const item = new Item({
      title,
      category,
      type,
      description,
      location,
      dateOccurred: dateOccurred || Date.now(),
      imageUrl,
      createdBy: req.user._id
    });

    const createdItem = await item.save();
    res.status(201).json(createdItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found.' });
    }

    if (item.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to modify this item.' });
    }

    item.title = req.body.title || item.title;
    item.category = req.body.category || item.category;
    item.type = req.body.type || item.type;
    item.description = req.body.description || item.description;
    item.location = req.body.location || item.location;
    item.status = req.body.status || item.status;

    if (req.file) {
      item.imageUrl = `/uploads/${req.file.filename}`;
    }

    const updatedItem = await item.save();
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found.' });
    }

    if (item.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this item.' });
    }

    await item.deleteOne();
    res.json({ message: 'Item removed successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
