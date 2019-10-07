const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

schema.static('trades', function() {
  const pipeline = [{
    $match: {
      ticker: 'abcd'
    }
  }, {
    $project: {
      hour: { $hour: '$time' },
      shares: '$shares'
    }
  }, {
    $group: {
      _id: '$hour',
      sharesTraded: {
        $sum: '$shares'
      }
    }
  }];

  return this.aggregate(pipeline);
});

module.exports = mongoose.model('Trade', schema);
