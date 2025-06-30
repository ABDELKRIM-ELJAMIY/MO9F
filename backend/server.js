const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
const auth = require('./routes/auth');
app.use('/api/auth', auth);
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Serveur en ecoute sur le port ${PORT}`);
});
process.on('unhandledRejection', (err, promise) => {
    console.log(`Erreur: ${err.message}`);
    server.close(() => process.exit(1));
});
