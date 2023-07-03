"use client";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Input } from "./ui/input";
import { PokemonCard } from "./pokemon-card";

// <PokemonGrid pokemonList ={data}/>

interface PokemonGridProps {
  pokemonList: any;
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");

  console.log(pokemonList);
  //filter text, save array of objects, show filtered results

  const searchFilter = (pokemonList:any)=>{
    return pokemonList.filter(
        (pokemon:any)=> pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }

  const filteredPokemonList = searchFilter(pokemonList);




  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Otsi Pokemon</h3>
        <div className="grid w-full max-w-sm item-center gap-1.5">
          <Label htmlFor="pokemonName">Pokemoni nimi</Label>
          <Input
            type="text"
            value={searchText}
            autoComplete="off"
            id="pokemonName"
            placeholder="Pikatchu, Arboc, Smogon, ..."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <h4 className="text-3xl padding-20 pb-8 text-center">Pokemonid</h4>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {filteredPokemonList.map((pokemon: any) => {
          return <PokemonCard name={pokemon.name} key = {pokemon.name + "Card"}/>;
        })}
      </div>
    </>
  );
}
