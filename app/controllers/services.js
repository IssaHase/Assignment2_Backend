let Model = require('../models/services');

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
    if (result.modifiedCount > 0) return res.json({ success: true, message: 'Service updated successfully.' });
    throw new Error('Service not updated. Are you sure it exists?');
  } catch (e) { next(e); }
};

module.exports.remove = async (req, res, next) => {
  try {
    const result = await Model.deleteOne({ _id: req.params.id });
    if (result.deletedCount > 0) return res.json({ success: true, message: 'Service deleted successfully.' });
    throw new Error('Service not deleted. Are you sure it exists?');
  } catch (e) { next(e); }
};

let ServiceModel = require('../models/services');

// ... your other handlers ...

module.exports.removeAll = async function (req, res, next) {
  try {
    const result = await ServiceModel.deleteMany({}); // remove everything
    res.json({
      success: true,
      message: `Deleted ${result.deletedCount} service(s).`
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
