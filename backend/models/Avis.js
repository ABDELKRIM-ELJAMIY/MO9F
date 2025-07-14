const mongoose = require('mongoose');

const avisSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ouvrier: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    note: { type: Number, required: true, min: 1, max: 5 },
    commentaire: { type: String, required: true },
    dateAvis: { type: Date, default: Date.now },
    modere: { type: Boolean, default: false }
});

module.exports = mongoose.model('Avis', avisSchema); 