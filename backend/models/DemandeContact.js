const mongoose = require('mongoose');

const demandeContactSchema = new mongoose.Schema({
    contenu: { type: String, required: true },
    typeService: { type: String, required: false },
    urgence: { type: String, required: false },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ouvrier: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    dateEnvoi: { type: Date, default: Date.now },
    statut: { type: String, default: 'en attente' }
});

module.exports = mongoose.model('DemandeContact', demandeContactSchema); 
