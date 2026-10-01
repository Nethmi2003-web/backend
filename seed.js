const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const User = require('./models/User');
const Item = require('./models/Item');
const Claim = require('./models/Claim');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to Database for seeding...');

    await User.deleteMany();
    await Item.deleteMany();
    await Claim.deleteMany();

    const hashedPassword = await bcrypt.hash('password123', 10);

    const users = await User.insertMany([
      { name: 'John Doe', email: 'john@university.edu', password: hashedPassword, phone: '+15550192', role: 'student' },
      { name: 'Jane Smith', email: 'jane@university.edu', password: hashedPassword, phone: '+15550193', role: 'student' },
      { name: 'Campus Admin', email: 'admin@university.edu', password: hashedPassword, phone: '+15550100', role: 'admin' }
    ]);
    console.log('Users Seeded.');

    const items = await Item.insertMany([
      {
        title: 'MacBook Pro 14"',
        category: 'Electronics',
        type: 'Lost',
        description: 'Space Gray laptop with a national park sticker near the trackpad.',
        location: 'Central Library, 2nd Floor',
        status: 'Open',
        createdBy: users[0]._id
      },
      {
        title: 'Blue Leather Wallet',
        category: 'Personal Belongings',
        type: 'Found',
        description: 'Found a blue wallet containing student identity card.',
        location: 'Student Union Cafeteria',
        status: 'Open',
        createdBy: users[1]._id
      }
    ]);
    console.log('Items Seeded.');

    process.exit();
  } catch (error) {
    console.error(`Error Seeding Data: ${error.message}`);
    process.exit(1);
  }
};

seedData();
