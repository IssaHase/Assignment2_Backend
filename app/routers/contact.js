var express = require("express");
var router = express.Router();
var {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");


// GET all + Create new
router
  .route("/")
  .get(getContacts)
  .post(createContact);

// Update + Delete
router
  .route("/:id")
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
