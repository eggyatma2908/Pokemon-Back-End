const modelPokemon = require('../models/pokemon');
const helper = require('../helpers/helper');
const { v1: uuidv1 } = require('uuid');

const pokemon = {
  getAllPokemon: (req, res, next) => {
    modelPokemon.getAllPokemon()
    .then(result => {
      const resultPokemon = result;
      helper.response(res, resultPokemon, 200, null);
    })
    .catch((err) => {
      helper.response(res, null, 500, {
        message: 'Error'
      });
    })
  },
  getPokemonById: (req, res, next) => {
    const id = req.params.id;
    modelPokemon.getPokemonById(id)
    .then(result => {
      const resultPokemon = result;
      if (resultPokemon.length === 0) {
        const error = new Error('Id Not Found');
        error.status = 404;
        return next(error);
      }
      helper.response(res, resultPokemon, 200, null);
    })
    .catch((err) => {
      helper.response(res, null, 500, {
        message: 'Error'
      });
    })
  },
  catchPokemon: (req, res, next) => {
    const id = uuidv1();
    const id_pokemon = req.params.id;
    const name = req.params.name;
    const data = {
      id,
      id_pokemon,
      name,
      created_date: new Date(),
      modified_date: null
    };
    if (Math.random() >= 0.5) {
      modelPokemon.catchPokemon(data)
      .then(result => {
        const resultPokemon = result;
        helper.response(res, resultPokemon, 200, null);
      })
      .catch((err) => {
        helper.response(res, null, 500, {
          message: 'Error'
        });
      })
    } else {
      helper.response(res, null, 417, {
        message: 'Failed'
      });
    }
  },
  updatePokemon: (req, res, next) => {
    const id = req.params.id;
    const name = req.body.name;
    const data = {
      name,
      modified_date: new Date()
    }
    modelPokemon.updatePokemon(id, data)
    .then((result) => {
      const resultPokemon = result;
      helper.response(res, resultPokemon, 200, null);
    })
    .catch((err) => {
      helper.response(res, null, 500, {
        message: 'Error'
      });
    })
  },
  releaseAllPokemon: (req, res, next) => {
    const id = req.params.iduser
    modelPokemon.releaseAllPokemon()
    .then(result => {
      const resultPokemon = result;
      helper.response(res, resultPokemon, 200, null);
    })
    .catch((err) => {
      helper.response(res, null, 500, {
        message: 'Error'
      });
    })
  },
  releasePokemon: (req, res, next) => {
    const id = req.params.idPokemon;
    let divider = 0;
    for (let i = 1; i <= id; i++) {
      if (id % i == 0) {
        divider++;
      }
    }
    if (divider == 2) {
      modelPokemon.releasePokemon(id)
      .then(result => {
        const resultPokemon = result;
        helper.response(res, resultPokemon, 200, null);
      })
      .catch((err) => {
        helper.response(res, null, 500, {
          message: 'Error'
        });
      })
    } else {
      helper.response(res, null, 417, {
        message: 'Failed'
      });
    }
  }
}

module.exports = pokemon;