import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemonById, getPokemonById1 } from "../services/pokemons"
import StatBarList from "../components/pokemonDetail/StatBarList"

const PokemonDetails = () => {
  const {pokemonId} = useParams()

  const [pokemonData, setPokemonData] = useState(null)

  useEffect(() => {
    getPokemonById1(pokemonId)
    .then((data)=>setPokemonData(data))
    .catch((err)=>console.log(err))
    
  
   
  }, [])
  
  



  useParams()
  return (
    <main className="flex justify-center items-center">
      <article className=" w-[min(100%,400px)]">

        <header>

        <div>
          <img src={pokemonData?.image} alt="" />

        </div>
        </header>

        <section>

          <span>#{pokemonData?.id}</span>
          <StatBarList stats = {pokemonData?.stats} />

        </section>






      </article>


    </main>
  )
}

export default PokemonDetails