import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PokemonService } from "../../../services/pokemon.service";
import "./styles/FindPokemonPage.scss";
import type { Pokemon } from "../../../models/pokemon.model";
import PokemonResultLine from "./PokemonResultLine";
import PokemonSearch from "../PokemonSearch";

type FindPokemonLocationState = {
  regionId?: number;
  regionName?: string;
};

export default function FindPokemonPage() {
  const location = useLocation();
  const locationState = (location.state as FindPokemonLocationState | null) ?? null;
  const regionId = locationState?.regionId ?? 1;
  const regionName = locationState?.regionName ?? "Kanto";

  const [randomPokemon, setRandomPokemon] = useState<Pokemon>();
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon>();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonResearched, setPokemonResearched] = useState<Pokemon[]>([]);

  const handlePokemonSelected = (pokemonName: string | null) => {
    const selected = pokemons.find((p) => p.name === pokemonName);

    if (!selected) {
      return;
    }

    setPokemonResearched((prev) => [selected, ...prev]);
    setPokemonSelected(selected);

    if (selected.name !== randomPokemon?.name) {
      setPokemons((prev) => prev.filter((pokemon) => pokemon.name !== selected.name));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const regionPokemons = await PokemonService.getPokemonsByRegion(regionId);
        setPokemons(regionPokemons);
        setPokemonResearched([]);
        setPokemonSelected(undefined);

        const randomIndex = Math.floor(Math.random() * regionPokemons.length);
        setRandomPokemon(regionPokemons[randomIndex]);
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
    </section>
  );
}
