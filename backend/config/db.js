const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_URL);
        console.log(`Base de donnees connectee: ${connect.connection.host}`);
    } catch (error) {
        console.log('Erreur de connexion a la base de donnees');
        process.exit(1);
    }
};

module.exports = connectDB;
