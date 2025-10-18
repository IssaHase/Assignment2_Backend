// app/controllers/contacts.js
const ContactModel = require('../models/contacts'); 

module.exports.create = async function (req, res, next) {
  try {
    console.log('Body:', req.body);
    const newContact = await ContactModel.create(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports.list = async function (req, res, next) {
  try {
    const list = await ContactModel.find();
    res.status(200).json(list);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports.contactByID = async function (req, res, next) {
  try {
    const contact = await ContactModel.findById(req.params.id);
    res.status(200).json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports.update = async function (req, res, next) {
  try {
    const result = await ContactModel.updateOne({ _id: req.params.id }, req.body);
    if (result.modifiedCount > 0) {
      res.json({ success: true, message: 'Contact updated successfully.' });
    } else {
      throw new Error('Contact not updated.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports.delete = async function (req, res, next) {
  try {
    const result = await ContactModel.deleteOne({ _id: req.params.id });
    if (result.deletedCount > 0) {
      res.json({ success: true, message: 'Contact deleted successfully.' });
    } else {
      throw new Error('Contact not deleted.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
