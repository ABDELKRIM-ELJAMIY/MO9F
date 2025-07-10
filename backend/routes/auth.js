const express = require('express');
const { register, login, logout } = require('../controllers/authController');
const adminController = require('../controllers/adminController');
const { protect, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/validate-token', require('../controllers/authController').validateToken);

// Mettre à jour le profil admin
router.put('/profil/:id', protect, authorizeRoles('admin'), adminController.updateProfile);
// Supprimer le compte admin
router.delete('/profil/:id', protect, authorizeRoles('admin'), adminController.deleteAccount);

module.exports = router; 