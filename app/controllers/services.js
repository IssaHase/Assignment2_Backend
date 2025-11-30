let Model = require('../models/services');

// GET all services
exports.getServices = async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET by ID (optional)
exports.getServiceById = async (req, res) => {
  try {
    const item = await Model.findById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE a service
exports.createService = async (req, res) => {
  try {
    const newService = await Model.create(req.body);
    res.status(201).json(newService);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE a service
exports.updateService = async (req, res) => {
  try {
    const result = await Model.updateOne({ _id: req.params.id }, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE a service
exports.deleteService = async (req, res) => {
  try {
    const result = await Model.deleteOne({ _id: req.params.id });
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
