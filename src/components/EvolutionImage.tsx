/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";

import { Species } from "types/EvolutionChain";
import { IMG_URL } from "utils/constants";
import Link from "next/link";

interface EvolutionImageProps {
  species: Species;
  bgColor: { light: string; medium: string }[];
}
export const EvolutionImage: React.FC<EvolutionImageProps> = ({
  species,
  bgColor,
}) => {
  return (
    <div>
      <Link href={`/pokemon/${species.name}`} passHref>
        <div
          style={{
            background: bgColor[0].light,
            borderRadius: "100%",
            padding: "1em",
          }}
        >
          <img
            key={species.name}
            src={`${IMG_URL + species.url.split("/").slice(-2, -1)[0]}.webp`}
            width="80"
            alt={species.name}
          />
        </div>
      </Link>
      <p>{species.name}</p>
    </div>
  );
};
