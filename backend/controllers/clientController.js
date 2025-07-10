const DemandeContact = require('../models/DemandeContact');

// Envoyer une demande
exports.envoyerDemande = async (req, res) => {
    try {
        const { contenu, typeService, urgence, ouvrier, client } = req.body;
        const demande = await DemandeContact.create({
            contenu,
            typeService,
            urgence,
            ouvrier,
            client
        });
        res.status(201).json({ success: true, demande });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
}; 