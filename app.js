const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

const gameRoutes = require('./routes/game');

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !')
);

app.use(cors('*'));
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/game', gameRoutes);

module.exports = app;
