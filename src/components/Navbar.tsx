/* eslint-disable react/jsx-key */
import Link from "next/link";
import React from "react";
import Search from "./Search";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "5em 0",
        minWidth: "100%",
      }}
    >
      <div>
        <Link href="/" passHref>
          <h1 style={{ fontSize: "3em" }}>Pokédex</h1>
        </Link>
        <h3>
          Search for a Pokemon by name or using its National Pokedex number.
        </h3>
        <Search />
      </div>
    </div>
  );
};
