const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const connectDB = async () => {
  const uri = process.env.MONGODB_URI?.trim();

  if (!uri || !/^mongodb(?:\+srv)?:\/\//i.test(uri)) {
    console.error(
      'MongoDB connection error: MONGODB_URI must start with mongodb:// or mongodb+srv://. Set it in Backend/.env (see Backend/.env.example).'
    );
    process.exit(1);
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;