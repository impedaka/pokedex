/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { usePokemonDetailStore } from "global-stores/PokemonDetailStore";
import React, { useMemo } from "react";
import { Name } from "types/PokemonSpecies";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import { IMG_URL } from "utils/constants";
import { getBackgroundColors } from "utils/getBackgroundColors";
import { capitalizeFirstLetter } from "utils/capatilize";
import { IconContext } from "react-icons";

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
    <>
      <div
        style={{
          marginTop: "3em",
          marginBottom: "2em",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <IconContext.Provider value={{ size: "3em", color: "#80829a" }}>
            <Link href={"/"}>
              <a>
                <BsArrowLeftShort />
              </a>
            </Link>
          </IconContext.Provider>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "-3em",
          }}
        >
          <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
          <h3>{jpName?.name}</h3>
        </div>
        <div />
      </div>
      <div
        style={{
          background: backgroundColors[0].light,
          display: "flex",
          justifyContent: "center",
          borderRadius: "1em",
        }}
      >
        <img
          key={pokemon.id}
          src={`${IMG_URL + pokemon.id}.webp`}
          alt={pokemon.name}
        />
      </div>
    </>
  );
};
