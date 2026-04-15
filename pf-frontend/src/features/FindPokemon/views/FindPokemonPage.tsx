import PokemonResultLine, { type PokemonResult } from "./PokemonResultLine";
import "./styles/FindPokemonPage.scss";

const POKEMON_RESULTS: PokemonResult[] = [
  {
    id: 1,
    name: "Ponyta",
    sprite: "Ponyta",
    type1: "Feu",
    type2: "Aucun",
    habitat: "Champs",
    colors: "Orange, Jaune",
    evolutionStage: "2",
    height: "1m70",
    weight: "95kg",
  },
  {
    id: 2,
    name: "Arcanin",
    sprite: "Arcanin",
    type1: "Feu",
    type2: "Aucun",
    habitat: "Champs",
    colors: "Orange, Jaune",
    evolutionStage: "2",
    height: "1m90",
    weight: "155kg",
  },
  {
    id: 3,
    name: "Florizarre",
    sprite: "Florizarre",
    type1: "Plante",
    type2: "Poison",
    habitat: "Champs",
    colors: "Vert",
    evolutionStage: "3",
    height: "2m",
    weight: "100kg",
  },
  {
    id: 4,
    name: "Dracaufeu",
    sprite: "Dracaufeu",
    type1: "Feu",
    type2: "Vol",
    habitat: "Montagne",
    colors: "Orange",
    evolutionStage: "3",
    height: "1m70",
    weight: "90.5kg",
  },
];

export default function FindPokemonPage() {
  return (
    <section className="find-pokemon-page">
      <h1>Find Pokemon</h1>

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
          {POKEMON_RESULTS.map((pokemon) => (
            <PokemonResultLine key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </section>
  );
}
