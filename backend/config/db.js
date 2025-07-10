const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_URL);
        console.log(`Base de donnees connectee: ${process.env.DB_URL}`);
    } catch (error) {
        console.log('Erreur de connexion a la base de donnees');
        
    }
};

module.exports = connectDB;
