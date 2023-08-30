import axios from "axios";

export const getAllPokemons = async () => {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=20";
  const { data } = await axios.get(URL);
  return data.results;
};


export const getPokemonByUrl = async (pokemonUrl)=>{
    const {data} = await axios.get(pokemonUrl)
    const pokemon= {
        id: data.id,
        name: data.name,
        types: formatTypes(data.types),
        stats: formatStats(data.stats),
        image: data.sprites.versions["generation-v"]["black-white"].animated.front_default
    }
    // console.log(pokemon)
    return pokemon
}

const formatStats = (stats)=> {
    return stats.map((stat)=> ({name:stat.stat.name, value: stat.base_stat}))
}
 
const formatTypes = (types) =>{
    return types.map((type)=>type.type.name)
}