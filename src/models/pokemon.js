const {actionQuery} = require('../helpers/helper');

const pokemon = {
  // CREATE
  catchPokemon: (data) => {
    return actionQuery('INSERT INTO captured_pokemon SET ?', data);
  },
  // READ
  getAllPokemon: () => {
    return actionQuery('SELECT * FROM captured_pokemon');
  },
  // READ
  getPokemonById: (id) => {
    return actionQuery('SELECT * FROM captured_pokemon WHERE id = ?', id);
  },
  // UPDATE
  updatePokemon: (id, data) => {
    return actionQuery('UPDATE captured_pokemon SET ? WHERE id = ?', [data, id]);
  },
  // DELETE
  releaseAllPokemon: () => {
    return actionQuery('DELETE FROM captured_pokemon WHERE id IS NOT NULL');
  },
  // DELETE
  releasePokemon: (id) => {
    return actionQuery('DELETE FROM captured_pokemon WHERE id_pokemon = ?', id);
  },
}

module.exports = pokemon;