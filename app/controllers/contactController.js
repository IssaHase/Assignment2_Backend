import Contact from "../models/contacts.js";

// GET all contacts
export async function getContacts(req, res) {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    console.error("Error fetching contacts:", err);
    res.status(500).json({ message: "Server error" });
  }
}

// CREATE a new contact
export async function createContact(req, res) {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
  } catch (err) {
    console.error("Error creating contact:", err);
    res.status(500).json({ message: "Server error" });
  }
}

// UPDATE a contact
export async function updateContact(req, res) {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedContact);
  } catch (err) {
    console.error("Error updating contact:", err);
    res.status(500).json({ message: "Server error" });
  }
}

// DELETE a contact
export async function deleteContact(req, res) {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error("Error deleting contact:", err);
    res.status(500).json({ message: "Server error" });
  }
}
