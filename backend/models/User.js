const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const workerSchema = new mongoose.Schema({
    photo: String,
    corpsDeMetier: { type: mongoose.Schema.Types.ObjectId, ref: 'CorpsDeMetier', required: false },
    experience: String,
    description: String,
    localisation: String,
    ville: String,
    quartier: String,
    disponibilite: { type: String, required: false },
    tarifsApproximatifs: { type: Number, required: false },
    noteGlobale: { type: Number, required: false },
    nombreAvis: { type: Number, required: false }
}, { _id: false });

const clientSchema = new mongoose.Schema({
    typeClient: String,
    adresse: String,
    telephone: String
}, { _id: false });

const adminSchema = new mongoose.Schema({
    niveau: String,
    permissions: [String]
}, { _id: false });

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    actif: {
        type: Boolean,
        default: true
    },
    worker: {
        type: workerSchema,
        required: function () { return this.role === 'worker'; }
    },
    client: {
        type: clientSchema,
        required: function () { return this.role === 'client'; }
    },
    admin: {
        type: adminSchema,
        required: function () { return this.role === 'admin'; }
    }
}, {
    timestamps: true
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.getSignedJwtToken = function () {
    return require('jsonwebtoken').sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
