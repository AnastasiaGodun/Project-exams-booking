const { Schema, model, pluralize } = require('mongoose');
const User = require('./user.model');
pluralize(null);

const applicationSchema = new Schema({
  studentName: String,
  date: Date,
  time: String,
  manager: String,
  examinator: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  group: String,
  comment: String,
  zoomlink: String,
  result: String,
},
 

// applicationSchema.statics.mostRecent = async function () {
//   return this.find().sort('date').limit(5).exec();
// };

module.exports = model('applications', applicationSchema);
