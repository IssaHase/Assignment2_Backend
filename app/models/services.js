const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicesSchema = new Schema({
  title: String,
  description: String
}, { collection: 'services' });

module.exports = mongoose.model('Service', ServicesSchema);
