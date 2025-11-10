const express = require('express');
const router = express.Router();
const { guestLogin } = require('../controllers/authController');

/**
 * POST /api/auth/guest-login
 * body: { name }
 */
router.post('/guest-login', guestLogin);

module.exports = router;
