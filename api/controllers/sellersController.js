const Seller = require("../models/Seller");
const bcrypt = require("bcrypt");
const validator = require("validator");

// handle seller registration
exports.postSeller = async (req, res) => {
  const { name, mail, pwd, storename } = req.body;
  if (!name || !mail || !pwd || !storename)
    return res
      .status(400)
      .json({ message: "email and password, & storename are required" });

  // check for Sellers usernames in the db
  let duplicatedEmail;
  if (validator.isEmail(mail)) {
    duplicatedEmail = await Seller.findOne({
      email: mail,
    }).exec();
  }
  const duplicateStore = await Seller.findOne({
    storename,
  }).exec();

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
      sellername: name,
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
// get all sellers
exports.getAllSellers = async (req, res) => {
  try {
    const getSellers = await Seller.find({});
    console.log(getSellers);
    res.status(201).json({ message: "gottem" });
  } catch (error) {
    console.log(error);
  }
};
