"use client";

import Image from "next/image";

export function PokemonImage({ image, name }: { image: string, name:string }) {
  return (
    <Image
      src={image}
      priority
      fill
      style={{"objectFit":"contain"}}
      className = "transition-opacity opacity-0 duration-[1s]"
      alt={"Pictures of " + name}
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
    />
  );
}
