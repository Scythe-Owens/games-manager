const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const sharp = require("sharp");

const app = express();

const categoryRoutes = require('./routes/category');
const gameRoutes = require('./routes/game');
const matchRoutes = require('./routes/match');
const songRoutes = require('./routes/song');

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !')
);

sharp.cache(false);

app.use(cors('*'));
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/category', categoryRoutes);
app.use('/api/game', gameRoutes);
app.use('/api/match', matchRoutes);
app.use('/api/song', songRoutes);

module.exports = app;
