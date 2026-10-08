const express = require('express');
const { signup } = require('../controllers/authentication.controller');
const router = express.Router();

router.get('/signup', signup);

module.exports = router