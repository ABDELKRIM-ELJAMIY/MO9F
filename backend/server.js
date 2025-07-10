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
const ouvrier = require('./routes/ouvrier');
const client = require('./routes/client');
app.use('/api/auth', auth);
app.use('/api/ouvriers', ouvrier);
app.use('/api/client', client);
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Serveur en ecoute sur le port ${PORT}`);
});
