const Contact = require("../models/contact");

// Save contact data
const saveContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    const savedContact = await newContact.save();
    res
      .status(201)
      .json({ message: "Form submitted successfully!", data: savedContact });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { saveContact };
