const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res, next) => {
    try {
        const { name, email, password, role, worker, client } = req.body;
        const userData = { name, email, password, role };
        if (role === 'worker' && worker) {
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

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
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

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    res.status(statusCode).json({
        success: true,
        token
    });
};
