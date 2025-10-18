const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
  title: String,
  completion: Date,
  description: String
}, { collection: 'projects' });

module.exports = mongoose.model('Project', ProjectsSchema);
