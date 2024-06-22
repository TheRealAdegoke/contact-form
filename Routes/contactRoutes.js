const express = require("express");
const router = express.Router();
const {contact, register} = require("../Controllers/contactController");

router.post("/contact", contact);

router.post("/register", register);

module.exports = router;
