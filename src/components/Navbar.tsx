/* eslint-disable react/jsx-key */
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div>
      <Link href="/" passHref>
        <h1>Pokédex</h1>
      </Link>
      <Link href="https://github.com/Louis3797/nextjs-pokedex" passHref>
        <BsGithub />
      </Link>
    </div>
  );
};
