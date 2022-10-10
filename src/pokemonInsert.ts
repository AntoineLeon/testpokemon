import {pokemon} from "./pokemonContext";

export const createPokemon = (pokemon: pokemon) => {
   fetch('http://localhost:3001/pokemons', {
     method: 'POST', body: JSON.stringify(pokemon),
     headers: {
       "Content-Type": "application/json",
     },
   })
}