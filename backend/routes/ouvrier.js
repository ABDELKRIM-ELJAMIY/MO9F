const express = require('express');
const router = express.Router();
const ouvrierController = require('../controllers/ouvrierController');

// Mettre à jour la disponibilité

router.patch('/disponibilite', ouvrierController.updateDisponibilite);

// Consulter les demandes 
router.get('/demandes', ouvrierController.getDemandes);

// Répondre à une demande 

router.post('/demandes/:id/repondre', ouvrierController.repondreDemande);

// Voir les avis 
router.get('/avis', ouvrierController.getAvis);

router.get('/rechercher', require('../controllers/ouvrierController').searchOuvriers);
router.put('/profil/:id', require('../controllers/ouvrierController').updateProfile);

module.exports = router; 