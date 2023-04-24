const express = require('express');
const router = express.Router();
const { registerUser } = require('../controlers/userControlers')

router.route('/').post(registerUser)
router.route('/login').post(() => { })

module.exports = router; 
