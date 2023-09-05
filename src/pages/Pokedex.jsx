import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllPokemons, getPokemonByType } from '../services/pokemons'
import PokemonList from '../components/pokedex/PokemonList'

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonType, setPokemonType] = useState("")
    const {name} = useSelector(store => store.trainer)
    const handleChange = (setState) => (e) => {
    setState(e.target.value)
  }
  
  const pokemonByName = pokemons.filter((pokemon)=>pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()))

  useEffect(() => {
    if(!pokemonType){
      getAllPokemons()
      .then((data)=> setPokemons(data))
      .catch((err)=> console.log(err)) 
    }
  }, [pokemonType])

  useEffect(() => {

    if(pokemonType){
      getPokemonByType(pokemonType).then((data)=>setPokemons(data))
    }
   }, [pokemonType])
  
  return (
    <main>
      <section>
        <p>
          <span>Welcome {name}</span>
        </p>

        <form>
          <div>
            <input value={pokemonName} onChange= {handleChange(setPokemonName)}   placeholder = "Search pokemon..." type="text" />
            
          </div>

          <select value={pokemonType} onChange={handleChange(setPokemonType)}>
            <option value="">All pokemons</option>
            <option value="rock">Rock</option>

          </select>


        </form>
      </section>


      <PokemonList pokemons = {pokemonByName} />
    </main>

  )
}

export default Pokedex