/* eslint-disable react/jsx-key */
import React from "react";
import { PokemonImage } from "./PokemonImage";
import { PokemonStats } from "./PokemonStats";

export const PokemonDetailsCard = () => {
  return (
    <div
      style={{
        backgroundColor: "#f5fbfb",
        padding: "5em",
        width: "fit-content",
      }}
    >
      <PokemonImage />
      <PokemonStats />
    </div>
  );
};
