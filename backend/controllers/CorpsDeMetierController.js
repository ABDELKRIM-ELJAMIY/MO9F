const CorpsDeMetier = require('../models/CorpsDeMetier');

// Créer un métier
exports.creerMetier = async (req, res) => {
    try {
        const { nom, description, categorie } = req.body;
        const metier = await CorpsDeMetier.create({ nom, description, categorie });
        res.status(201).json({ success: true, metier });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
};

// Modifier un métier
exports.modifierMetier = async (req, res) => {
    try {
        const metierId = req.params.id;
        const updates = req.body;
        const metier = await CorpsDeMetier.findByIdAndUpdate(metierId, updates, { new: true, runValidators: true });
        if (!metier) {
            return res.status(404).json({ success: false, msg: 'Métier non trouvé.' });
        }
        res.status(200).json({ success: true, metier });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
};

// Supprimer un métier
exports.supprimerMetier = async (req, res) => {
    try {
        const metierId = req.params.id;
        const deleted = await CorpsDeMetier.findByIdAndDelete(metierId);
        if (!deleted) {
            return res.status(404).json({ success: false, msg: 'Métier non trouvé.' });
        }
        res.status(200).json({ success: true, msg: 'Métier supprimé.' });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
}; 