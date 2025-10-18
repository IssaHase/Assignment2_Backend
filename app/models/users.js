const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  created: { type: Date, default: Date.now, immutable: true },
  updated: { type: Date, default: Date.now }
}, { collection: 'users' });

module.exports = mongoose.model('User', UsersSchema);
