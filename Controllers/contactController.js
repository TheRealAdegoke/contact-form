const {sendMessage, registerMessage} = require("../Services/contactMailer");
const nodemailer = require("nodemailer");

const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    sendMessage(name, email, message);

    res.status(200).send({ message: "Message sent!" });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};

const register = async (req, res) => {
  try {
    const { name, email, sport } = req.body;

    registerMessage(name, email, sport);

    res.status(200).send({ message: "Message sent!" });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = {contact, register};


