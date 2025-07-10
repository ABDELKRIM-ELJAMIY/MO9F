const User = require('../models/User');
const DemandeContact = require('../models/DemandeContact');

exports.updateDisponibilite = async (req, res) => {
    try {
        const userId = req.body.userId;
        const { disponibilite } = req.body;
        const user = await User.findOneAndUpdate(
            { _id: userId, role: 'worker' },
            { $set: { 'worker.disponibilite': disponibilite } },
            { new: true, runValidators: true }
        );
        if (!user) return res.status(404).json({ success: false, msg: 'Ouvrier non trouvé' });
        res.json({ success: true, disponibilite: user.worker.disponibilite });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email, worker } = req.body;
        const updateData = {};
        if (name) updateData.name = name;
        if (email) updateData.email = email;
        if (worker) {
            if (!worker.corpsDeMetier) {
                return res.status(400).json({ success: false, msg: 'Le champ corpsDeMetier est requis pour le profil ouvrier.' });
            }
            updateData.worker = worker;
        }
        const user = await User.findOneAndUpdate(
            { _id: userId, role: 'worker' },
            { $set: updateData },
            { new: true, runValidators: true }
        ).select('-password');
        if (!user) return res.status(404).json({ success: false, msg: 'Ouvrier non trouvé' });
        res.json({ success: true, user });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
};

exports.getDemandes = async (req, res) => {
    try {
        const userId = req.query.userId;
        if (!userId) {
            return res.status(400).json({ success: false, msg: 'userId requis en query' });
        }
        const demandes = await DemandeContact.find({ ouvrier: userId });
        res.json({ success: true, demandes });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
};

exports.repondreDemande = async (req, res) => {
    const { userId, action, message } = req.body;
    const demandeId = req.params.id;
    if (action !== 'accept' && action !== 'refuse') {
        return res.status(400).json({ success: false, msg: 'Action invalide (accept/refuse attendu)' });
    }
    try {
        const statut = action === 'accept' ? 'acceptee' : 'refusee';
        const demande = await DemandeContact.findOneAndUpdate(
            { _id: demandeId, ouvrier: userId },
            { statut },
            { new: true }
        );
        if (!demande) {
            return res.status(404).json({ success: false, msg: 'Demande non trouvée ou non autorisée' });
        }
        return res.json({ success: true, message: `Demande ${statut}`, demande });
    } catch (err) {
        return res.status(400).json({ success: false, msg: err.message });
    }
};

exports.getAvis = async (req, res) => {
    res.json({ success: true, avis: [] });
};

exports.searchOuvriers = async (req, res) => {
    try {
        const { name, corpsDeMetier, specialite, ville, quartier } = req.query;
        const query = { role: 'worker' };
        if (name) query.name = { $regex: name, $options: 'i' };
        if (corpsDeMetier) query['worker.corpsDeMetier'] = { $regex: corpsDeMetier, $options: 'i' };
        if (specialite) query['worker.corpsDeMetier'] = { $regex: specialite, $options: 'i' };
        if (ville) query['worker.ville'] = { $regex: ville, $options: 'i' };
        if (quartier) query['worker.quartier'] = { $regex: quartier, $options: 'i' };
        const ouvriers = await User.find(query).select('-password');
        if (!ouvriers.length) {
            return res.status(404).json({ success: false, message: 'Aucun ouvrier trouvé avec ces critères.' });
        }
        res.json({ success: true, ouvriers });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
};

// Supprimer le compte ouvrier
exports.deleteAccount = async (req, res) => {
    try {
        const ouvrierId = req.params.id;
        const deleted = await require('../models/User').findOneAndDelete({ _id: ouvrierId, role: 'worker' });
        if (!deleted) {
            return res.status(404).json({ success: false, msg: 'Ouvrier non trouvé.' });
        }
        res.status(200).json({ success: true, msg: 'Compte ouvrier supprimé.' });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
}; 