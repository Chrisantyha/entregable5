import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemonById, getPokemonById1 } from "../services/pokemons"
import StatBarList from "../components/pokemonDetail/StatBarList"
import { bgStylePokemonType, borderStylePokemonbyType } from "../shared/pokemon"

const PokemonDetails = () => {
  const {pokemonId} = useParams()

  const [pokemonData, setPokemonData] = useState(null)

  useEffect(() => {
    getPokemonById1(pokemonId)
    .then((data)=>setPokemonData(data))
    .catch((err)=>console.log(err))
    
  
   
  }, [])


  console.log(pokemonData)
  
  



  useParams()
  return (
    <main className=" flex justify-center items-center ">
      <article className={`text-center capitalize border-[5mpx] rounded-md ${borderStylePokemonbyType[pokemonData?.types[0]]}`}>

        <header className={`h-[80px] relative mb-9 ${bgStylePokemonType[pokemonData?.types[0]]}`}>

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[65px] aspect-square">
          <img className= "h-full w-full object-contain" src={pokemonData?.image} alt="" />
        </div>

        <h2 className="font-bold text-center">_____________{pokemonData?.name}_____________</h2>

        <br/> <br/> 

        <section className="font-bold text-center grid grid-cols-2">
        <section>
          <h2>Tipos</h2>
          {pokemonData?.types[0]} {" / "} {pokemonData?.types[1]}
          
          
          </section>
          <section>
          <h2>Habilidades</h2>

          <h5> {pokemonData?.abilities[0].ability.name} {" / "}  {pokemonData?.abilities[1].ability.name}</h5>
          
          
        </section>
          
          
        </section>
        </header>

        <section>

          <span className="font-bold">#{pokemonData?.id}</span>
          <StatBarList stats = {pokemonData?.stats} />

        </section>





        {/* console.log(pokemonData) */}
      </article>


    </main>
  )
}

export default PokemonDetails