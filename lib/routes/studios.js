const { Router } = require('express');
const Studio = require('../models/Studio');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { name, city, state, country } = req.body;
    Studio
      .create({ name, city, state, country })
      .then(studio => res.send(studio))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Studio
      .find()
      .then(studios => res.send(studios))
      .catch(next);
  });
