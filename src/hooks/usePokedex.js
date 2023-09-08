import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllPokemons, getPokemonByType } from '../services/pokemons'

const usePokedex = () => {
    
    const [pokemons, setPokemons] = useState([])
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonType, setPokemonType] = useState("")
    const {name} = useSelector(store => store.trainer)
    const handleChange = (setState) => (e) => {
    setState(e.target.value)
  }
  
  const pokemonByName = pokemons.filter((pokemon)=>
  pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()))

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
     
   return {
        name,
        pokemonName,
        setPokemonName,
        pokemonType,
        setPokemonType,
        handleChange,
        pokemonByName
    }
    
  
}

export default usePokedex