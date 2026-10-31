const products = require('../Products/product');
const Product = require('../Models/Products');

const seedProducts = async ({ onlyWhenEmpty = false } = {}) => {
  if (onlyWhenEmpty && (await Product.countDocuments()) > 0) {
    return 0;
  }

  const result = await Product.bulkWrite(
    products.map((product) => ({
      updateOne: {
        filter: { name: product.name },
        update: { $setOnInsert: product },
        upsert: true,
      },
    }))
  );

  return result.upsertedCount;
};

module.exports = seedProducts;
