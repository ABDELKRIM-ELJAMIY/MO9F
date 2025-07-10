const User = require('../models/User');

// Mettre à jour le profil admin
exports.updateProfile = async (req, res) => {
    try {
        const adminId = req.params.id;
        const updates = req.body;
        const updatedAdmin = await User.findOneAndUpdate(
            { _id: adminId, role: 'admin' },
            { $set: updates },
            { new: true, runValidators: true }
        );
        if (!updatedAdmin) {
            return res.status(404).json({ success: false, msg: 'Admin non trouvé.' });
        }
        res.status(200).json({ success: true, user: updatedAdmin });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
};

// Supprimer le compte admin
exports.deleteAccount = async (req, res) => {
    try {
        const adminId = req.params.id;
        const deleted = await User.findOneAndDelete({ _id: adminId, role: 'admin' });
        if (!deleted) {
            return res.status(404).json({ success: false, msg: 'Admin non trouvé.' });
        }
        res.status(200).json({ success: true, msg: 'Compte admin supprimé.' });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
}; 