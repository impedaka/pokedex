/* eslint-disable react/jsx-key */
import { IconContext } from "react-icons";
import { CgOptions } from "react-icons/cg";
import PokemonCard from "@/components/PokemonCard";
import { usePokemonStore } from "global-stores/PokemonStore";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { IPokemon } from "types/Pokemon";

export interface Result {
  name: string;
  url: string;
}

export interface PokemonIDList {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}
const Home: NextPage = () => {
  const [query, setQuery] = useState("");
  const { pokemon, next } = usePokemonStore((state) => ({
    pokemon: state.pokemon,
    next: state.next,
  }));

  const setPokemons = usePokemonStore((state) => state.setPokemons);

  const setNext = usePokemonStore((state) => state.setNext);

  async function fetchPokemon(): Promise<void> {
    if (next !== null) {
      const data: PokemonIDList = await fetch(next).then((response) =>
        response.json()
      );

      setNext(data.next);

      fetchPokemonDetails(data.results);
    }
  }

  function fetchPokemonDetails(data: Result[]): void {
    data.forEach(async (x: Result) => {
      const newPokemon: IPokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${x.name}`,
        { cache: "force-cache" }
      ).then((response) => response.json());

      setPokemons(newPokemon);
    });
  }

  useEffect(() => {
    fetchPokemon();

    return () => {
      next;
      pokemon;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredData = pokemon.filter((el) => {
    if (query == "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(query);
    }
  });
  return (
    <div
      style={{
        backgroundColor: "#f5fbfb",
        padding: "3em",
        maxWidth: "1000px",
        width: "fit-content",
      }}
    >
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Get information about all Pokemon" />
        <meta property="og:title" content="Pokedéx" key="Pokedéx" />
      </Head>
      <InfiniteScroll
        dataLength={pokemon.length}
        next={fetchPokemon}
        hasMore={!!next}
        loader={<h3></h3>}
        endMessage={<div></div>}
      >
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1em",
                width: "fit-content",
                marginTop: "1em",
              }}
            >
              <form action="/" method="get">
                <input
                  style={{
                    backgroundColor: "#ebf3f5",
                    color: "#aab0bf",
                    padding: "1em",
                    borderRadius: "1em",
                    borderStyle: "none",
                  }}
                  type="text"
                  id="header-search"
                  placeholder="🔍 Name or number"
                  onChange={(event) => setQuery(event.target.value)}
                />
              </form>
              <IconContext.Provider value={{ color: "#5d5e7d", size: "3.5em" }}>
                <CgOptions />
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div
          key={next}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2em",
          }}
        >
          {filteredData.map((data: IPokemon, idx: number) => (
            <PokemonCard
              key={idx}
              id={data.id}
              name={data.name}
              type={data.types}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
