const express = require("express");
const router = express.Router()
const clientsCtrl = require('../controllers/clientsCtrl')

router.post("/", clientsCtrl.postClient)

module.exports = router