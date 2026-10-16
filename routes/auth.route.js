const express = require('express');
const { signup } = require('../controllers/authentication.controller');
const { loginForm, login, register } = require('../controllers/dashboard.controller');
const router = express.Router();

router.get('/signup', signup);

console.log("AUTH ROUTER LOADED");

router.post('/register', (req, res) => {
    console.log("REGISTER ROUTE HIT");
    register(req, res);
});

router.get('/login', loginForm)
router.post('/login', login)



module.exports = router