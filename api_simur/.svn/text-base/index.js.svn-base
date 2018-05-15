'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');
/*
const options = {
    poolSize: 10, // Maintain up to 10 socket connections
};
mongoose.connect(config.mongodb, options, (err, res) => {
    if (err) {
        console.log(`Error al conectar a MongoDB: ${err}`);
        throw err;
    } else {
        console.log(`MongoDB: ${config.mongodb}`);
    }
});*/

app.listen(config.port, () => {
    console.log(`API REST SIMUR corriendo en http://localhost:${config.port}`);
});