const mongoose = require('mongoose');

const demandeContactSchema = new mongoose.Schema({
    contenu: { type: String, required: true },
    dateEnvoi: { type: Date, default: Date.now },
    statut: { type: String, default: 'en_attente' },
    typeService: { type: String },
    urgence: { type: String },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ouvrier: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const DemandeContact = mongoose.model('DemandeContact', demandeContactSchema);

module.exports = DemandeContact; 
