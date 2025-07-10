const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Envoyer une demande
// Body: { contenu, typeService, urgence, ouvrier, client }
router.post('/demande', clientController.envoyerDemande);

module.exports = router; 