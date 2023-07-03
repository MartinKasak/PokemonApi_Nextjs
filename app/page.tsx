import { PokemonGrid } from "@/components/pokemon-grid";
import Image from "next/image";

export default function Home() {
  //load in data
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

    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <PokemonGrid/>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Docs{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Find in-depth information about Next.js features and API.
        </p>
      </a>
    </div>
  );
}
