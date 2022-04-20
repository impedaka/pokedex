/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import Link from "next/link";
import React, { useMemo } from "react";
import { Type } from "types/Pokemon";
import { capitalizeFirstLetter } from "utils/capatilize";
import { IMG_URL } from "utils/constants";
import { getBackgroundColors } from "utils/getBackgroundColors";

interface PokemonCard {
  id: number;
  name: string;
  type: Type[];
}

const PokemonCard: React.FC<PokemonCard> = ({ id, name, type }) => {
  const backgroundColors = useMemo(() => getBackgroundColors(type), [type]);

  return (
    <Link href={`/pokemon/${name}`}>
      <a>
        <div
          style={{
            background: backgroundColors[0].light,
            maxWidth: "20em",
            padding: "2em",
            borderRadius: "1em",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={`${IMG_URL + id}.webp`}
            alt={name}
            height="200"
            width="200"
          />
          <h2>{capitalizeFirstLetter(name)}</h2>
          <h3>{id.toString().padStart(3, "0")}</h3>
        </div>
      </a>
    </Link>
  );
};

export default PokemonCard;
