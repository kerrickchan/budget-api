/* eslint-disable @typescript-eslint/no-var-requires */
const Categories = require('./categories.seed.json');

module.exports = {
  async up(db) {
    const founds = await Promise.all(
      Categories.map((category) =>
        db.collection('categories').findOne({ code: category.code }),
      ),
    );

    return founds.map((category, index) => {
      if (!category) {
        return db.collection('categories').insertOne(Categories[index]);
      }
    });
  },

  async down(db) {
    const founds = await Promise.all(
      Categories.map((category) =>
        db.collection('categories').findOne({ code: category.code }),
      ),
    );

    return founds.map((category) => {
      if (category) {
        return db.collection('categories').deleteOne({ code: category.code });
      }
    });
  },
};
