import { getPokemon } from "@/lib/pokemonAPI";
import Image from "next/image";
import { PokemonImage } from "@/components/pokemon-image";
// pokemon name mis me saame
// pokemonName = "arboc" näitab arbok lehte


export default async function PokemonPage({ params } : {params:{pokemonName:string}}){
    //object destructure
    const{pokemonName} = params;
    //

    const pokemonObject = await getPokemon(pokemonName);

    console.log(pokemonObject);

    return (
        <>
            <h1 className="text-3xl text-bold pt-5">{pokemonName}</h1>
            <div className="m-3 " style={{position:"relative", width:"400px", height:"400px"}}>
            <PokemonImage image = {pokemonObject.sprites.other['official-artwork'].front_default}
                name = {pokemonName}
            
            />
            </div>
        </>
    )

}
