import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemonById } from "../services/pokemons"

const PokemonDetails = () => {
  const {pokemonId} = useParams()

  const [pokemonData, setPokemonData] = useState(null)

  useEffect(() => {
    getPokemonById(pokemonId).then((data)=>setPokemonData(data)).catch((err)=>console.log(err))
    
  
   
  }, [])
  
  



  useParams()
  return (
    <main>
      <h1>ughduh</h1>


    </main>
  )
}

export default PokemonDetails