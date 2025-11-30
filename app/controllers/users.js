let Model = require('../models/users');

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
    if (result.modifiedCount > 0) return res.json({ success: true });
    throw new Error('User not updated.');
  } catch (e) { next(e); }
};

module.exports.remove = async (req, res, next) => {
  try {
    const result = await Model.deleteOne({ _id: req.params.id });
    if (result.deletedCount > 0) return res.json({ success: true });
    throw new Error('User not deleted.');
  } catch (e) { next(e); }
};
