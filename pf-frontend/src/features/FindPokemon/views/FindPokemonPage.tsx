import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/FindPokemonPage.scss";
import type { Pokemon } from "../../../models/pokemon.model";
import PokemonResultLine from "./PokemonResultLine";
import PokemonSearch from "../PokemonSearch";
import { PokemonService } from "../../../services/pokemon.service";

type FindPokemonLocationState = {
  regionId?: number;
  regionName?: string;
};

export default function FindPokemonPage() {
  const location = useLocation();
  const locationState =
    (location.state as FindPokemonLocationState | null) ?? null;
  const parsedRegionId = (locationState?.regionId ?? "1", 10);
  const regionId = Number.isNaN(parsedRegionId) ? 1 : parsedRegionId;
  const regionName = locationState?.regionName ?? "Kanto";
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await PokemonService.getPokemonsByRegion(regionId + 1);
        setPokemons(data);
      } catch (err) {
        console.error("Erreur lors du chargement", err);
      }
    };

    fetchData();
  }, [regionId]);

  return (
    <section className="find-pokemon-page">
      <h1>Find Pokemon</h1>
      <h2>{regionName}</h2>

      {pokemons && <FindPokemonGame regionPokemons={pokemons} />}
    </section>
  );
}

function FindPokemonGame({ regionPokemons }: Pokemon[]) {
  const [randomPokemon] = useState<Pokemon | undefined>(() => {
    if (regionPokemons.length === 0) {
      return undefined;
    }

    const randomIndex = Math.floor(Math.random() * regionPokemons.length);
    return regionPokemons[randomIndex];
  });
  const [pokemons, setPokemons] = useState<Pokemon[]>(regionPokemons);
  const [pokemonResearched, setPokemonResearched] = useState<Pokemon[]>([]);

  const handlePokemonSelected = (pokemonName: string | null) => {
    const selected = pokemons.find((p) => p.name === pokemonName);

    if (!selected) {
      return;
    }

    setPokemonResearched((prev) => [selected, ...prev]);

    if (selected.name !== randomPokemon?.name) {
      setPokemons((prev) =>
        prev.filter((pokemon) => pokemon.name !== selected.name),
      );
    }
  };

  return (
    <>
      <PokemonSearch
        pokemons={pokemons}
        onPokemonSelected={handlePokemonSelected}
        targetPokemonName={randomPokemon?.name}
      />

      <div className="pokemon-results-board">
        <div className="pokemon-results-header">
          <span>Pokemon</span>
          <span>Type 1</span>
          <span>Type 2</span>
          <span>Habitat</span>
          <span>Couleurs</span>
          <span>Stade evolution</span>
          <span>Hauteur [m]</span>
          <span>Poids [kg]</span>
        </div>

        <div className="pokemon-results-list">
          {pokemonResearched.map((pokemon, index) => (
            <PokemonResultLine
              key={`${pokemon.id}-${index}`}
              pokemon={pokemon}
              randomPokemon={randomPokemon}
            />
          ))}
        </div>
      </div>
    </>
  );
}
