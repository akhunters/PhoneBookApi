const express = require("express");
const mongoose = require("mongoose");

const Contact = mongoose.model("Contact");

const router = express.Router();

router.put("/api/addContact", async (req, res) => {
  try {
    const { name, phoneNumber, email } = req.body;
    const contact = new Contact({ name, email, phoneNumber });
    await contact.save();
    return res
      .status(201)
      .send({ message: "Contact saved successfully", contact });
  } catch (err) {
    return res.status(422).send({ message: "Email already exists" });
  }
});

router.delete("/api/deleteContact", async (req, res) => {
  try {
    const { email } = req.body;
    await Contact.findOneAndDelete({ email });
    return res.status(200).send({ message: "Contact deleted successfully" });
  } catch (err) {
    return res.status(422).send({ message: err.message });
  }
});

router.post("/api/modifyContact", async (req, res) => {
  try {
    const { name, phoneNumber, email } = req.body;

    const contact = await Contact.find({ email });

    if (contact.length > 0) {
      Contact.findOneAndUpdate(
        { email },
        { $set: { name, phoneNumber } },
        { new: true },
        (err, contact) => {
          if (err) {
            console.log("Something wrong when updating data!");
          }

          return res
            .status(201)
            .send({ message: "Contact updated successfully", contact });
        }
      );
    } else {
      return res
        .status(200)
        .send({ message: "No contact found associated with this email." });
    }
  } catch (err) {
    return res.status(422).send({ message: err.message });
  }
});

router.get("/api/getContacts", async (req, res) => {
  try {
    const resultsPerPage = 10;
    const page = req.query.page || 1;

    const contacts = await Contact.find({})
      .skip(resultsPerPage * page - resultsPerPage)
      .limit(resultsPerPage);
    res.status(200).send({ contacts, page });
  } catch (err) {
    return res.status(422).send({ message: err.message });
  }
});

router.get("/api/searchContact", async (req, res) => {
  try {
    const resultsPerPage = 10;
    const page = req.query.page || 1;

    const { name, email } = req.query;

    let query = {};
    if (name) query = { name: { $regex: ".*" + name + ".*", $options: "i" } };
    if (email)
      query = { email: { $regex: ".*" + email + ".*", $options: "i" } };

    const contacts = await Contact.find(query)
      .skip(resultsPerPage * page - resultsPerPage)
      .limit(resultsPerPage);
    res.status(200).send({ contacts, page });
  } catch (err) {
    return res.status(422).send({ message: err.message });
  }
});

module.exports = router;
