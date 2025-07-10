const express = require('express');
const router = express.Router();
const ouvrierController = require('../controllers/ouvrierController');
const { protect, authorizeRoles } = require('../middleware/auth');

// Mettre à jour la disponibilité
router.patch('/disponibilite', protect, authorizeRoles('ouvrier'), ouvrierController.updateDisponibilite);

// Consulter les demandes 
router.get('/demandes', protect, authorizeRoles('ouvrier'), ouvrierController.getDemandes);

// Répondre à une demande 
router.post('/demandes/:id/repondre', protect, authorizeRoles('ouvrier'), ouvrierController.repondreDemande);

// Voir les avis 
router.get('/avis', protect, authorizeRoles('ouvrier'), ouvrierController.getAvis);

router.get('/rechercher', protect, authorizeRoles('ouvrier'), require('../controllers/ouvrierController').searchOuvriers);
router.put('/profil/:id', protect, authorizeRoles('ouvrier'), require('../controllers/ouvrierController').updateProfile);

// Supprimer le compte ouvrier
router.delete('/profil/:id', protect, authorizeRoles('ouvrier'), ouvrierController.deleteAccount);

module.exports = router; 