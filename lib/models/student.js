const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

schema.static('studentscores', function() {
  const pipeline = [{
    $unwind: {
      path: '$scores'
    }
  }, {
    $group: {
      _id: '$scores.type',
      maxScore: {
        $max: '$scores.score'
      },
      minScore: {
        $min: '$scores.score'
      },
      avgScore: {
        $avg: '$scores.score'
      }
    }
  }];

  return this.aggregate(pipeline);
});

module.exports = mongoose.model('Student', schema);
