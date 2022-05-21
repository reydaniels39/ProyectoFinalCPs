'use strict';

const serverless = require('serverless-http');
const express = require('express');
const app = express();

const cpmexico = require('./data/cpmexico.json')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/postales/:postalcode', (req, res) => {
  const postalCode = req.params.postalcode;
  const data = {
    estado: '',
    municipio: '',
    colonias: [],
  };
  if(!cpmexico) {
    return res.send({
      data,
      err: `missing database`
    });
  }
  if(!postalCode) {
    return res.send({
      data,
      err: `missing postal code ${postalCode}`
    });
  }
  const resultPostal = cpmexico.filter( postal => postal.cp === postalCode);
  if(!resultPostal[0]) {
    return res.send({
      data,
      err: `not result for ${postalCode}`
    });
  }
  data.colonias = resultPostal.map(results => ({
    nombre: results.asentamiento,
    tipo: results.type,
  }))
  data.estado = resultPostal[0].estado;
  data.municipio = resultPostal[0].municipio;
  res.send({
    data,
    err: null
  });
});

module.exports.generic = serverless(app);