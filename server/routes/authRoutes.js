const express = require("express");
const { signup, login } = require("../controllers/AuthControllers");



const path = require("path")
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;