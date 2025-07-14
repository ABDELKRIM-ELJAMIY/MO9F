const express = require('express');
const router = express.Router();
const corpsDeMetierController = require('../controllers/CorpsDeMetierController');
const { protect, authorizeRoles } = require('../middleware/auth');

// Créer un métier
router.post('/', protect, authorizeRoles('admin'), corpsDeMetierController.creerMetier);
// Modifier un métier
router.put('/:id', protect, authorizeRoles('admin'), corpsDeMetierController.modifierMetier);
// Supprimer un métier
router.delete('/:id', protect, authorizeRoles('admin'), corpsDeMetierController.supprimerMetier);

module.exports = router; 