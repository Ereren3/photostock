const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/createAcc').post(authController.createUser);
router.route('/userLogin').post(authController.login);

module.exports = router;