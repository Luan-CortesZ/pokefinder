import type { Pokemon } from "../../../models/pokemon.model";
import PokemonInfoCard from "./PokemonInfoCard";

type PokemonResultLineProps = {
  pokemon: Pokemon;
};
// rajouiter le pokemon qui est généré aléatoirement dans le tableau result pour le comparer avec les pokemons recherchés

export default function PokemonResultLine({ pokemon }: PokemonResultLineProps) {
  return (
    // faire une fonction verifyField (qui prend en paramètre le champ à comparer) qui retourne la couleur en text en fonction de la comparaison entre le pokemon random et le pokemon recherché
    // qui sera appelé à chaque fois dans tone.


    <div className="pokemon-result-line">
      <PokemonInfoCard tone="image" label={pokemon.name}>
        <img
          className="pokebox-img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </PokemonInfoCard>
      <PokemonInfoCard>{pokemon.types[0].type.name}</PokemonInfoCard>
      {/* <PokemonInfoCard>{pokemon.types[1].type.name}</PokemonInfoCard> */}
      <PokemonInfoCard>{pokemon.location_area_encounters}</PokemonInfoCard>
      <PokemonInfoCard tone="yellow">{pokemon.id.toString()}</PokemonInfoCard>
      <PokemonInfoCard>{pokemon.id.toString()}</PokemonInfoCard>
      <PokemonInfoCard tone="red">{pokemon.height.toString()}</PokemonInfoCard>
      <PokemonInfoCard tone="red">{pokemon.weight.toString()}</PokemonInfoCard>
    </div>
  );
}
