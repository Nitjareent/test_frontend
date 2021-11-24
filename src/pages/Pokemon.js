import axios from "axios"
import { useState, useEffect } from "react"

export default function Pokemon(){
    const [arrayPokemon, setArrayPokemon] = useState([])
    async function fetchData (){
        const arr = []
        for (var i = 1; i <= 104; i++){
           const res = await axios.get('https://pokeapi.co/api/v2/pokemon/'+i)
            arr.push(await res.data);
        }
        setArrayPokemon(arr)
    }
    useEffect(() => {
        fetchData()
    }, [])

  console.log(arrayPokemon);  
    return (
        <div className="pokemon">
            <h1>Test fetch API</h1>
            <div className="pokemonData">
            
            {
                arrayPokemon.map((val, i ) => {
                    return (
                    <div key={i}>
                        <img src={val.sprites.front_default} />
                        <p>{val.name}</p>
                    </div>
                )
                })
            }


        </div>
        </div>
        
    )
}