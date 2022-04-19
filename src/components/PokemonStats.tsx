/* eslint-disable react/jsx-key */
import { usePokemonDetailStore } from "global-stores/PokemonDetailStore";
import React from "react";
import { Ability, Type } from "types/Pokemon";
import { FlavorTextEntry, Genera } from "types/PokemonSpecies";
import { capitalizeFirstLetter } from "utils/capatilize";
import { PokemonTypeColor } from "utils/colors";
import { EvolutionChain } from "./EvolutionChain";
import { Stats } from "./Stats";

export const PokemonStats = () => {
  const pokemon = usePokemonDetailStore((state) => state.pokemon);
  const species = usePokemonDetailStore((state) => state.species);

  const stats = [
    {
      title: "Species",
      content: species?.genera?.find((l: Genera) => l.language.name === "en")
        ?.genus,
    },
    {
      title: "Habitat",
      content: capitalizeFirstLetter(species?.habitat?.name),
    },
    {
      title: "Height",
      content: (pokemon?.height / 10).toString() + " m",
    },
    {
      title: "Weight",
      content: (pokemon?.weight / 10).toFixed(1) + " kg",
    },
    {
      title: "Abilities",
      content: pokemon?.abilities?.map((abilitie: Ability) => {
        return capitalizeFirstLetter(abilitie.ability.name) + "\n";
      }),
    },
    {
      title: "Base Exp",
      content: pokemon?.base_experience.toString(),
    },
    {
      title: "Catch Rate:",
      content: ((species?.capture_rate / 255) * 100).toFixed(1) + "%",
    },
    {
      title: "Growth Rate",
      content: capitalizeFirstLetter(species?.growth_rate.name),
    },
  ];
  return (
    <div>
      <p key={pokemon.id}>
        {
          species.flavor_text_entries.find(
            (l: FlavorTextEntry) => l.language.name === "en"
          )?.flavor_text
        }
      </p>
      <p>Pokemon Stats</p>
      <div>
        {pokemon.types.map((t: Type, idx: number) => {
          return (
            <div
              key={idx}
              style={{
                backgroundColor: Object.entries(PokemonTypeColor).filter(
                  ([key, _]) => key === t.type.name
                )[0][1].medium,
              }}
            >
              <p>{t.type.name.toUpperCase()}</p>
            </div>
          );
        })}
      </div>
      <Stats stats={stats} />
      <EvolutionChain chainURL={species.evolution_chain.url} />
    </div>
  );
};
