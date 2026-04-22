import type { Pokemon } from "../../../models/pokemon.model";
import PokemonInfoCard from "./PokemonInfoCard";

type PokemonResultLineProps = {
  pokemon: Pokemon;
};

export default function PokemonResultLine({ pokemon }: PokemonResultLineProps) {
  return (
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
