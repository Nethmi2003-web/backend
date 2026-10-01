const express = require('express');
const router = express.Router();
const { createClaim, getItemClaims, getMyClaims, updateClaimStatus } = require('../controllers/claimController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createClaim);
router.get('/myclaims', protect, getMyClaims);
router.get('/item/:itemId', protect, getItemClaims);
router.put('/:id', protect, updateClaimStatus);

module.exports = router;
