const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Electronics', 'Books & Documents', 'Clothing', 'Keys & Cards', 'Personal Belongings', 'Other']
    },
    type: {
      type: String,
      required: [true, 'Type is required'],
      enum: ['Lost', 'Found']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    },
    location: {
      type: String,
      required: [true, 'Location is required']
    },
    dateOccurred: {
      type: Date,
      required: [true, 'Date is required'],
      default: Date.now
    },
    imageUrl: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      enum: ['Open', 'Claim Pending', 'Resolved'],
      default: 'Open'
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema);
