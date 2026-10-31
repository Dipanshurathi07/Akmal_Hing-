const mongoose = require('mongoose');
const dotenv = require('dotenv');
const seedProducts = require('./Utils/seedProducts');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const runSeed = async () => {
  const uri = process.env.MONGODB_URI?.trim();
  if (!uri || !/^mongodb(?:\+srv)?:\/\//i.test(uri)) {
    throw new Error('MONGODB_URI must start with mongodb:// or mongodb+srv://. Check Backend/.env before seeding.');
  }

  try {
    await mongoose.connect(uri);
    const added = await seedProducts();
    console.log(`Product catalog ready. Added ${added} missing products.`);
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

runSeed().catch((error) => {
  console.error('Error seeding products:', error.message);
  process.exitCode = 1;
});
