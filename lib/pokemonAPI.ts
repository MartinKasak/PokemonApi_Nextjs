const POKEMON_API = "https://pokeapi.co/api/v2/";


//getPokemonList - võtame esimesed 151 tykki
export async function getPokemonList(){
    const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
    const data = await response.json();
    return data.results;

}

//getPokemon - võtame stringi nt. "arbok" ja saame andmed