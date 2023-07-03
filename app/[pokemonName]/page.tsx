import { getPokemon } from "@/lib/pokemonAPI";
import Image from "next/image";
import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
// pokemon name mis me saame
// pokemonName = "arboc" näitab arbok lehte

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  //object destructure
  const { pokemonName } = params;
  //

  const pokemonObject = await getPokemon(pokemonName);

  console.log(pokemonObject);

  return (
    <>
      <h1 className="text-3xl text-bold pt-5">
      {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>
      <div
        className="m-3 "
        style={{ position: "relative", width: "400px", height: "400px" }}
      >
        <PokemonImage
          image={pokemonObject.sprites.other["official-artwork"].front_default}
          name={pokemonName}
        />
      </div>
      <h2>Kaal:{pokemonObject.weight}</h2>
      <div className="flex-col">
        {pokemonObject.stats.map((statObject: any) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;
          return (
            <div
              className="flex items-stretch"
              style={{ width: "500px" }}
              key={statObject.stat.name}>
                <h3 className="p-3 w-2/4">{statName}:{statValue}</h3>
                <Progress className="w-2/4 m-auto" value={statValue}/>
            </div>
          );
        })}
      </div>
    </>
  );
}
