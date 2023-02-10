const express = require("express");
const router = express.Router()
const sellersCtrl = require('../controllers/sellersCtrl')

router.post("/", sellersCtrl.postSeller)
router.get("/get", sellersCtrl.getAllSellers)

module.exports = router