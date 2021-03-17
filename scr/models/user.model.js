const { Schema, model, pluralize } = require('mongoose');
pluralize(null);

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  phoneNumber: String,
},
 


module.exports = model('users', userSchema);

