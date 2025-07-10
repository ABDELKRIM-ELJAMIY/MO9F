const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const { protect, authorizeRoles } = require('../middleware/auth');

router.post('/demande', protect, authorizeRoles('client'), clientController.envoyerDemande);

// Add profile update route for client
router.put('/profil/:id', protect, authorizeRoles('client'), clientController.updateProfile);

module.exports = router; 