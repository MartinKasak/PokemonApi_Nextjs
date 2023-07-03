import { PokemonGrid } from "@/components/pokemon-grid";
import { PokemonCard } from "@/components/pokemon-card";
import Image from "next/image";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {
  //load in data
  const pokemonList = await getPokemonList();
  //text input filteres pokemon cards
  //useState to handle input
  //text input filter current data
  //PokemonGrid - text input with grid
  //getting data from server component

  //pass the data to PokemonGrid

  //step 1. create grid called PokemonGrid
  //step 2. load in data from PokemonAPI
  //step 3. Pass in data to PokemonGrid from API call 
  return (
    <PokemonGrid pokemonList={pokemonList}/>
  );
}
