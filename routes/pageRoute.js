const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.route("/index").get(pageController.getIndexPage);
router.route("/login").get(pageController.getLoginPage);
router.route("/createAcc").get(pageController.getRegisterPage);

module.exports = router;