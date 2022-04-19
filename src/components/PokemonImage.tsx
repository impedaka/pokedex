/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { usePokemonDetailStore } from "global-stores/PokemonDetailStore";
import React, { useMemo } from "react";
import { Name } from "types/PokemonSpecies";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import { IMG_URL } from "utils/constants";
import { getBackgroundColors } from "utils/getBackgroundColors";

export const PokemonImage = () => {
  const pokemon = usePokemonDetailStore((state) => state.pokemon);
  const species = usePokemonDetailStore((state) => state.species);

  const backgroundColors = useMemo(
    () => getBackgroundColors(pokemon.types),
    [pokemon.types]
  );

  const jpName: Name | undefined = species.names.find(
    (name) => name.language.name === "ja-Hrkt"
  );

  return (
    <div
      style={{
        background: `radial-gradient(#fafafa,30%, ${backgroundColors[0].medium})`,
      }}
    >
      <div>
        <Link href={"/"} passHref>
          <BsArrowLeftShort />
        </Link>
        <p>{"#" + pokemon.id.toString().padStart(3, "0")}</p>
        <p>{pokemon.name}</p>
      </div>
      <p>{jpName?.name}</p>
      <img
        key={pokemon.id}
        src={`${IMG_URL + pokemon.id}.webp`}
        alt={pokemon.name}
      />
    </div>
  );
};
