import { useEffect, useState } from "react";
import { PokemonService } from "../../../services/pokemon.service";
import "./styles/FindPokemonPage.scss";
import type { Pokemon } from "../../../models/pokemon.model";
import PokemonResultLine from "./PokemonResultLine";
import PokemonSearch from "../PokemonSearch";

// ajouter un champ de recherche, et quand ça recherche le pokemon, ça liste
// les pokemons qui correspondent aux lettres affichés dans la texteBox.
// Dans la barre de recherche on affiche le name et le sprite
// Quand on le sélectionne ça l'ajoute dans le tableau result

export default function FindPokemonPage() {
  const [pokemon, setPokemon] = useState<Pokemon>();
  // utiliser quand on va faire la recherche de pokemon pour afficher ceux dispo
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
const handlePokemonSelected = (pokemonName: string | null) => {
    const selected = pokemons.find((p) => p.name === pokemonName);
    setPokemonResearched([selected, ...pokemonResearched] as Pokemon[]);
  };
  const [pokemonResearched, setPokemonResearched] = useState<Pokemon[]>([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemons = await PokemonService.getPokemonsByRegion(
          (2).toString(), // sélectionne les pokemons d'une région spécifique, ici la région 2 (Johto)
        );
        setPokemons(pokemons);
        const randomIndex = Math.floor(Math.random() * pokemons.length);
        setPokemon(pokemons[randomIndex]);
      } catch (err) {
        console.error("Erreur lors du chargement", err);
      }
    };

    fetchData();
  }, []);



  return (
    <section className="find-pokemon-page">
      <h1>Find Pokemon</h1>

      <PokemonSearch pokemons={pokemons} onPokemonSelected={handlePokemonSelected} />

      <div className="pokemon-results-board">
        <div className="pokemon-results-header">
          <span>Pokemon</span>
          <span>Type 1</span>
          <span>Type 2</span>
          <span>Habitat</span>
          <span>Couleurs</span>
          <span>Stade evolution</span>
          <span>Hauteur</span>
          <span>Poids</span>
        </div>


        <div className="pokemon-results-list">
          {pokemonResearched.map((pokemon) => (
            <PokemonResultLine key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </section>
  );
}
