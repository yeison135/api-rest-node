'use strict'

const express = require('express');
const api = express.Router();

//Se incluyen los controladores que soportan el api
const sicon = require('../controllers/sicon');
const zonas = require('../controllers/zonas');

api.get('/', (req, res) => {
    res.send('API REST SIMUR');
});

//Se definen los servicios del api
api.post('/consultarComparendos', sicon.consultarComparendos);
api.post('/consultarZonasCarga', zonas.consultarZonasCarga);

module.exports = api;