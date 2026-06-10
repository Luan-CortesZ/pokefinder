import type { Pokemon } from "../../../models/pokemon.model";
import PokemonInfoCard from "./PokemonInfoCard";
import { verifyNumeric, verifyType } from "../utils/pokemonComparison";

type PokemonResultLineProps = {
  pokemon: Pokemon;
  randomPokemon?: Pokemon;
  isNew?: boolean;
};

export default function PokemonResultLine({
  pokemon,
  randomPokemon,
}: PokemonResultLineProps) {
  if (!randomPokemon) return null;

  const targetTypes = randomPokemon.types.map((t) => t.name);

  return (
    // AJOUT de "new-guess" pour l'animation unique
    <div className="pokemon-result-line new-guess">
      <PokemonInfoCard tone="image" label={pokemon.name}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </PokemonInfoCard>

      <PokemonInfoCard tone={verifyType(pokemon.types[0]?.name, 0, targetTypes)}>
        {pokemon.types[0]?.name}
      </PokemonInfoCard>

      <PokemonInfoCard tone={verifyType(pokemon.types[1]?.name, 1, targetTypes)}>
        {pokemon.types[1]?.name ?? "-"}
      </PokemonInfoCard>

      <PokemonInfoCard
        tone={pokemon.color === randomPokemon.color ? "green" : "red"}
      >
        {pokemon.color}
      </PokemonInfoCard>

      <PokemonInfoCard
        tone={verifyNumeric(
          pokemon.evolutionStage,
          randomPokemon.evolutionStage,
        )}
      >
        {pokemon.evolutionStage}
      </PokemonInfoCard>

      <PokemonInfoCard
        tone={verifyNumeric(pokemon.height, randomPokemon.height)}
      >
        {pokemon.height / 10}m
      </PokemonInfoCard>

      <PokemonInfoCard
        tone={verifyNumeric(pokemon.weight, randomPokemon.weight)}
      >
        {pokemon.weight / 10}kg
      </PokemonInfoCard>
    </div>
  );
}
