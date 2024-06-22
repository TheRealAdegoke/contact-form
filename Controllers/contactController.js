const {sendMessage, registerMessage} = require("../Services/contactMailer");

const contact = async (req, res) => {
  try {
    const { name, senderEmail, message } = req.body;

    sendMessage(name, senderEmail, message);

    res.status(200).send({ message: "Message sent!" });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};

const register = async (req, res) => {
  try {
    const { name, senderEmail, sport } = req.body;

    registerMessage(name, senderEmail, sport);

    res.status(200).send({ message: "Message sent!" });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = {contact, register};


