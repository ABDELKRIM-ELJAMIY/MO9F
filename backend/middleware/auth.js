const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'acces refuse - no token '
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select('-password');
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "token invalide "
            });
        }
        req.user = {
            id: user._id,
            email: user.email,
            role: user.role,
            nom: user.nom,
            prenom: user.prenom
        };
        next();
    } catch (err) {
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({
                success: false,
                message: "invalid token "
            });
        } else if (err.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: 'Token expiré'
            });
        } else {
            return res.status(500).json({
                success: false,
                message: 'Erreur d\'authentification'
            });
        }
    }
}

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: 'Accès refusé: rôle non autorisé'
            });
        }
        next();
    };
};