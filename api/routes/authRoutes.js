const express = require("express");
const router = express.Router()
const authCtrl = require('../controllers/authController')

// router.post("/", clientsCtrl.postClient)
router.post("/signup", authCtrl.postSingupSeller)
router.post("/login", authCtrl.postLogin)

module.exports = router