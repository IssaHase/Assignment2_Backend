let Model = require('../models/projects');

module.exports.list = async (req, res, next) => {
  try { res.json(await Model.find()); } catch (e) { next(e); }
};

module.exports.getById = async (req, res, next) => {
  try { res.json(await Model.findById(req.params.id)); } catch (e) { next(e); }
};

module.exports.create = async (req, res, next) => {
  try { res.json(await Model.create(req.body)); } catch (e) { next(e); }
};

module.exports.update = async (req, res, next) => {
  try {
    const result = await Model.updateOne({ _id: req.params.id }, req.body);
    if (result.modifiedCount > 0) return res.json({ success: true, message: 'Project updated successfully.' });
    throw new Error('Project not updated. Are you sure it exists?');
  } catch (e) { next(e); }
};

module.exports.remove = async (req, res, next) => {
  try {
    const result = await Model.deleteOne({ _id: req.params.id });
    if (result.deletedCount > 0) return res.json({ success: true, message: 'Project deleted successfully.' });
    throw new Error('Project not deleted. Are you sure it exists?');
  } catch (e) { next(e); }
};
