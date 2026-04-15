import PokemonInfoCard from "./PokemonInfoCard";

type PokemonResult = {
  id: number;
  name: string;
  sprite: string;
  type1: string;
  type2: string;
  habitat: string;
  colors: string;
  evolutionStage: string;
  height: string;
  weight: string;
};

type PokemonResultLineProps = {
  pokemon: PokemonResult;
};

export type { PokemonResult };

export default function PokemonResultLine({ pokemon }: PokemonResultLineProps) {
  return (
    <div className="pokemon-result-line">
      <PokemonInfoCard tone="image" label={pokemon.name}>
        {pokemon.sprite}
      </PokemonInfoCard>
      <PokemonInfoCard>{pokemon.type1}</PokemonInfoCard>
      <PokemonInfoCard>{pokemon.type2}</PokemonInfoCard>
      <PokemonInfoCard>{pokemon.habitat}</PokemonInfoCard>
      <PokemonInfoCard tone="yellow">{pokemon.colors}</PokemonInfoCard>
      <PokemonInfoCard>{pokemon.evolutionStage}</PokemonInfoCard>
      <PokemonInfoCard tone="red">{pokemon.height}</PokemonInfoCard>
      <PokemonInfoCard tone="red">{pokemon.weight}</PokemonInfoCard>
    </div>
  );
}
