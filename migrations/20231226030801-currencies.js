/* eslint-disable @typescript-eslint/no-var-requires */
const Currencies = require('./currencies.seed.json');

module.exports = {
  async up(db) {
    const founds = await Promise.all(
      Currencies.map((currency) =>
        db.collection('currencies').findOne({ code: currency.code }),
      ),
    );

    return founds.map((currency, index) => {
      if (!currency) {
        return db.collection('currencies').insertOne(Currencies[index]);
      }
    });
  },

  async down(db) {
    const founds = await Promise.all(
      Currencies.map((currency) =>
        db.collection('currencies').findOne({ code: currency.code }),
      ),
    );

    return founds.map((currency) => {
      if (currency) {
        return db.collection('currencies').deleteOne({ code: currency.code });
      }
    });
  },
};
