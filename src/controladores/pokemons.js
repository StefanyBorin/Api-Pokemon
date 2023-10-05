const { listarPokemons, detalharPokemon } = require("utils-playground");

const pokemonsLista = async (req, res) => {
    const { pagina } = req.query;
    const lista = await listarPokemons(pagina ?? 1);
    return res.status(200).json(lista);
};

const pokemonId = async (req, res) => {
    try {
        const { idOuNome } = req.params;
        const detalhesPokemons = await detalharPokemon(idOuNome);
        const {
            id,
            name,
            height,
            weight,
            base_experience,
            forms,
            abilities,
            species,
        } = detalhesPokemons;

        return res.json({
            id,
            name,
            height,
            weight,
            base_experience,
            forms,
            abilities,
            species,
        });
    } catch (erro) {
        return res.status(500).json(erro.message);
    }
};

module.exports = {
    pokemonsLista,
    pokemonId,
};
