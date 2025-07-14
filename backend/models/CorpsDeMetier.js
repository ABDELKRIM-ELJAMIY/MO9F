const mongoose = require('mongoose');

const corpsDeMetierSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    description: { type: String, required: false },
    categorie: { type: String, required: false }
});

module.exports = mongoose.model('CorpsDeMetier', corpsDeMetierSchema); 