const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemon');

router
  .get('/', pokemonController.getAllPokemon)
  .get('/:id', pokemonController.getPokemonById)
  .post('/:id/:name', pokemonController.catchPokemon)
  .patch('/:id', pokemonController.updatePokemon)
  .delete('/', pokemonController.releaseAllPokemon)
  .delete('/:idPokemon', pokemonController.releasePokemon)

module.exports = router;