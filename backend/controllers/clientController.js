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

// Mettre à jour le profil du client
exports.updateProfile = async (req, res) => {
    try {
        const clientId = req.params.id;
        const updates = req.body;
        const updatedClient = await require('../models/User').findByIdAndUpdate(
            clientId,
            { $set: updates },
            { new: true, runValidators: true }
        );
        if (!updatedClient) {
            return res.status(404).json({ success: false, msg: 'Client non trouvé.' });
        }
        res.status(200).json({ success: true, user: updatedClient });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
};

// Supprimer le compte client
exports.deleteAccount = async (req, res) => {
    try {
        const clientId = req.params.id;
        const deleted = await require('../models/User').findByIdAndDelete(clientId);
        if (!deleted) {
            return res.status(404).json({ success: false, msg: 'Client non trouvé.' });
        }
        res.status(200).json({ success: true, msg: 'Compte supprimé.' });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
}; 