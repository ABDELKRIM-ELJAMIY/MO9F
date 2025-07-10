const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.register = async (req, res, next) => {
    try {
        const { name, email, password, role, worker, client } = req.body;
        const userData = { name, email, password, role };
        if (role === 'worker') {
            if (!worker || !worker.corpsDeMetier) {
                return res.status(400).json({ success: false, msg: 'Le champ corpsDeMetier est requis pour les ouvriers.' });
            }
            userData.worker = worker;
        }
        if (role === 'client' && client) {
            userData.client = client;
        }
        const user = await User.create(userData);
        const userObj = user.toObject();
        delete userObj.password;
        res.status(201).json({
            success: true,
            message: 'Utilisateur enregistre avec succes',
            user: userObj
        });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
};


exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, msg: 'Veuillez fournir un e-mail et un mot de passe' });
        }
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ success: false, msg: 'Identifiants invalides' });
        }
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, msg: 'Identifiants invalides' });
        }
        sendTokenResponse(user, 200, res);
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
};

const sendTokenResponse = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    res.status(statusCode).json({
        success: true,
        token
    });
};

exports.logout = (req, res) => {
    res.status(200).json({ success: true, message: 'Déconnexion réussie.' });
};

exports.validateToken = async (req, res) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Token manquant ou invalide.' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        const user = await User.findById(decoded.id).select('-password');
        if (!user) {
            return res.status(404).json({ success: false, message: 'Utilisateur non trouvé.' });
        }
        res.json({ success: true, user });
    } catch (err) {
        res.status(401).json({ success: false, message: 'Token invalide.' });
    }
};
