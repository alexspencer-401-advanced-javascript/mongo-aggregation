const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

schema.static('grades', function() {
  const pipeline = 

  return this.aggregate(pipeline);
});

module.exports = mongoose.model('Grade', schema);
