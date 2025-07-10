const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const { protect, authorizeRoles } = require('../middleware/auth');

router.post('/demande', protect, authorizeRoles('client'), clientController.envoyerDemande);

// Add profile update route for client
router.put('/profil/:id', protect, authorizeRoles('client'), clientController.updateProfile);
// Supprimer le compte client
router.delete('/profil/:id', protect, authorizeRoles('client'), clientController.deleteAccount);

module.exports = router; 