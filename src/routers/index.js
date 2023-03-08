const express = require('express');
const router = express.Router();
const routePokemon = require('./pokemon');

router
  .use('/pokemon', routePokemon)
  
module.exports = router;