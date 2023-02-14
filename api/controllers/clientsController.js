const Client = require("../models/Client");
const bcrypt = require("bcrypt");
const validator = require("validator");

// handle client registration
exports.postClient = async (req, res) => {
  const { name, mail, pwd } = req.body;
  if (!name || !mail || !pwd)
    return res.status(400).json({ message: "email and password are required" });

  // check for clients email or "name" in the db
  let duplicatedEmail;
  if (validator.isEmail(mail)) {
    duplicatedEmail = await Client.findOne({
      email: mail,
    }).exec();
  }
  if (duplicatedEmail || !validator.isEmail(mail))
    return res.status(409).json({ message: "Email duplicated or invalid" }); //conflict

  //  validates pwd
  if (!validator.isLength(pwd, { min: 8 })) {
    return res
      .status(409)
      .json({ message: "Password must have more than 8 characters" }); //conflict
  }

  try {
    //encrypt pawd
    const hashedpwd = await bcrypt.hash(pwd, 10);
    //create and store new user
    const result = await Client.create({
      name,
      email: mail,
      password: hashedpwd,
    });
    console.log(result);
    res.status(201).json({ success: "saved" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all clients
exports.getAllClients = async (req, res) => {
  try {
    const getClients = await Client.find({});
    console.log(getClients);
    res.status(201).json({ message: "gottem" });
  } catch (error) {
    console.log(error);
  }
};
