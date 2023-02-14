// const jwt = require('jsonwebtoken')
const Seller = require("../models/Seller");
const bcrypt = require("bcrypt");

// Handle seller register!
exports.postSingupSeller = async (req, res) => {
  const { name, mail, pwd, storename } = req.body;
  if (!name || !mail || !pwd || !storename)
    return res
      .status(400)
      .json({ message: "email and password, & storename are required" });

  // check for Sellers email and store name in the db
  let duplicatedEmail;
  if (validator.isEmail(mail)) {
    duplicatedEmail = await Seller.findOne({
      email: mail,
    }).exec();
  }
  const duplicateStore = await Seller.findOne({
    storename,
  }).exec();

  // checks if pwd length is valid

  if (!validator.isLength(pwd, { min: 8 })) {
    return res
      .status(409)
      .json({ message: "Password must have more than 8 characters" }); //conflict
  }

  if (duplicateStore && duplicatedEmail) {
    return res
      .status(409)
      .json({ message: "Email and StoreName are duplicated" }); //conflict
  } else if (duplicatedEmail || !validator.isEmail(mail)) {
    return res.status(409).json({ message: "Email duplicated or not Valid" }); //conflict
  } else if (duplicateStore) {
    return res.status(409).json({ message: "Store name duplicated" }); //conflict
  }

  try {
    //encrypt pawd
    const hashedpwd = await bcrypt.hash(pwd, 10);
    //create and store new user
    const result = await Seller.create({
      name,
      email: mail,
      password: hashedpwd,
      storename,
    });
    console.log(result);
    res.status(201).json({ success: "saved" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Handle login account
exports.postLogin = async (req, res) => {
  const { name, pwd } = req.body;
  if (!name || !pwd) {
    return res.status(400).json({ message: "email and password are required" });
  }

  const loggedUser = await Seller.findOne({
    sellername: name,
  });

  if (!loggedUser) {
    return res.sendStatus(401);
  }

  // evaluate password
  const match = bcrypt.compare(pwd, loggedUser.password);
  if (match) {
    console.log(loggedUser);
    return res.status(200).json({ message: `${loggedUser.sellername} logged` });
  } else {
    return res.status(409).json({ message: `Wrong password or email` });
  }
};
