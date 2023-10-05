const express = require("express");
const rotas = express();

const { pokemonsLista, pokemonId } = require("./controladores/pokemons");

rotas.get("/pokemon", pokemonsLista);

rotas.get("/pokemon/:idOuNome", pokemonId);

module.exports = rotas;