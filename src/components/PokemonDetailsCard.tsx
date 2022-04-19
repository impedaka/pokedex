/* eslint-disable react/jsx-key */
import React from "react";
import { PokemonImage } from "./PokemonImage";
import { PokemonStats } from "./PokemonStats";

export const PokemonDetailsCard = () => {
  return (
    <div>
      <PokemonImage />
      <PokemonStats />
    </div>
  );
};
