"use client";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Input } from "./ui/input";
import { PokemonCard } from "./pokemon-card";

export function PokemonGrid() {
  const [searchText, setSearchText] = useState("");

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
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <PokemonCard name="arboc" />

      </div>
    </>
  );
}
