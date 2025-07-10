const express = require('express');
const { register, login, logout } = require('../controllers/authController');

const router = express.Router();
const { protect, authorizeRoles } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/validate-token', require('../controllers/authController').validateToken);

// Add profile update route for admin
const adminController = require('../controllers/adminController');
router.put('/profil/:id', protect, authorizeRoles('admin'), adminController.updateProfile);

module.exports = router; 