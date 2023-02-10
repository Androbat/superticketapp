const Seller = require("../models/Seller");
const bcrypt = require("bcrypt");

module.exports = {
  postSeller : async ( req, res ) => {
  const { name, mail, pwd, storename } = req.body;
  if (!name || !mail || !pwd || !storename)
    return res.status(400).json({ message: "email and password, & storename are required" });

  // check for Sellers usernames in the db
  const duplicatedEmail = await Seller.findOne({
    email: mail
  }).exec();
   const duplicateStore = await Seller.findOne({
    storename
  }).exec();

  if(duplicateStore && duplicatedEmail) {
    return res.status(409).json({'message': 'Email and StoreName are duplicated'}); //conflict
}else if (duplicatedEmail) {
  return res.status(409).json({'message': 'Email duplicated'}); //conflict
} else if (duplicateStore) {
  return res.status(409).json({'message': 'Store name duplicated'}); //conflict
}

  try {
    //encrypt pawd
    const hashedpwd = await bcrypt.hash(pwd, 10);
    //create and store new user
    const result = await Seller.create({
      name,
      email: mail,
      password: hashedpwd,
      storename
    });
    console.log(result);
    res.status(201).json({ success: "saved" });
  } catch (error) {
    res.status(500).json({ 'message': error.message });
  }
},
getAllSellers : async ( req, res ) => {
  try {
    const getSellers = await Seller.find({})
    console.log(getSellers);
  res.status(201).json({'message': 'gottem'})
  } catch (error) {
    console.log(error);
  }
},
}