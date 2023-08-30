import React, { useEffect, useState } from 'react'
import { getPokemonByUrl } from '../../services/pokemons'

const PokemonCard = ({pokemonUrl}) => {
    const [pokemonInfo, setPokemonInfo] = useState(null)
    //console.log(pokemonInfo)
    useEffect(() => {
        getPokemonByUrl(pokemonUrl)
        .then((data)=>setPokemonInfo(data))
        .catch((err)=>console.log(err))
    }, [])
    
  return (
    <article>
        <header>
            <div>
                <img src='' alt='' />
            </div>
        </header>

        <section>
            <h3>{pokemonInfo?.name}</h3>
        </section>
    </article>
  )
}

export default PokemonCard