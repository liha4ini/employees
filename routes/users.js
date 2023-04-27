const express = require('express');
const router = express.Router();
const { login, register, current } = require('../controllers/users');


router.post('/login', login);

router.post('/login', register);

router.get('/login', current);

module.exports = router;
