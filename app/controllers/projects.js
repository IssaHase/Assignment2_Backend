let Model = require('../models/projects');

// GET all projects
exports.getProjects = async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET project by ID (optional)
exports.getProjectById = async (req, res) => {
  try {
    const item = await Model.findById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE project
exports.createProject = async (req, res) => {
  try {
    const newProject = await Model.create(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE project
exports.updateProject = async (req, res) => {
  try {
    const result = await Model.updateOne({ _id: req.params.id }, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE project
exports.deleteProject = async (req, res) => {
  try {
    const result = await Model.deleteOne({ _id: req.params.id });
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
