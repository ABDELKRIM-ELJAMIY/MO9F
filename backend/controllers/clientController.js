const DemandeContact = require('../models/DemandeContact');
const Avis = require('../models/Avis');

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

// Consulter l'historique des demandes du client
exports.getHistorique = async (req, res) => {
    try {
        const clientId = req.user.id;
        const demandes = await require('../models/DemandeContact').find({ client: clientId });
        res.status(200).json({ success: true, historique: demandes });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
};

// Laisser un avis sur un ouvrier
exports.laisserAvis = async (req, res) => {
    try {
        const clientId = req.user.id;
        const { ouvrier, note, commentaire } = req.body;
        if (!ouvrier || !note || !commentaire) {
            return res.status(400).json({ success: false, msg: 'Tous les champs sont requis.' });
        }
        const avis = await Avis.create({
            client: clientId,
            ouvrier,
            note,
            commentaire
        });
        res.status(201).json({ success: true, avis });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
}; 