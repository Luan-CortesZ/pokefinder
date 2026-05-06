import type { Pokemon } from "../../../models/pokemon.model";
import PokemonInfoCard from "./PokemonInfoCard";

type PokemonResultLineProps = {
  pokemon: Pokemon;
  randomPokemon?: Pokemon;
};

export default function PokemonResultLine({
  pokemon,
  randomPokemon,
}: PokemonResultLineProps) {
  const pokemonTypes = pokemon.types.map((entry) => entry.name);
  const randomPokemonTypes =
    randomPokemon?.types.map((entry) => entry.name) ?? [];
  const formatMetricValue = (value: number) => (value / 10).toString();

  const verifyField = (
    searchedValue: string | number,
    randomValue: string | number,
  ): "green" | "yellow" | "red" => {
    if (searchedValue === randomValue) {
      return "green";
    }

    if (typeof searchedValue === "number" && typeof randomValue === "number") {
      return searchedValue < randomValue ? "yellow" : "red";
    }

    return "red";
  };

  const verifyExactField = (
    searchedValue: string | number,
    randomValue: string | number,
  ): "green" | "red" => {
    return searchedValue === randomValue ? "green" : "red";
  };

  const verifyTypeSlot = (
    searchedType: string | undefined,
    targetTypeAtSameSlot: string | undefined,
    targetTypes: string[],
  ): "green" | "yellow" | "red" => {
    if (!searchedType) {
      return !targetTypeAtSameSlot ? "green" : "red";
    }

    if (searchedType === targetTypeAtSameSlot) {
      return "green";
    }

    if (targetTypes.includes(searchedType)) {
      return "yellow";
    }

    return "red";
  };

  const type1Tone = randomPokemon
    ? verifyTypeSlot(pokemonTypes[0], randomPokemonTypes[0], randomPokemonTypes)
    : "green";
  const type2Tone = randomPokemon
    ? verifyTypeSlot(pokemonTypes[1], randomPokemonTypes[1], randomPokemonTypes)
    : "green";

  return (
    <div className="pokemon-result-line">
      <PokemonInfoCard tone="image" label={pokemon.name}>
        <img
          className="pokebox-img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </PokemonInfoCard>
      <PokemonInfoCard tone={type1Tone}>
        {pokemon.types[0].name}
      </PokemonInfoCard>
      <PokemonInfoCard tone={type2Tone}>
        {pokemon.types[1]?.name ?? "-"}
      </PokemonInfoCard>
      <PokemonInfoCard
        tone={
          randomPokemon
            ? verifyExactField(
                pokemon.habitat ?? "-",
                randomPokemon.habitat ?? "-",
              )
            : "green"
        }
      >
        {pokemon.habitat ?? "-"}
      </PokemonInfoCard>
      <PokemonInfoCard
        tone={
          randomPokemon
            ? verifyExactField(pokemon.color ?? "-", randomPokemon.color ?? "-")
            : "green"
        }
      >
        {pokemon.color ?? "-"}
      </PokemonInfoCard>
      <PokemonInfoCard
        tone={
          randomPokemon
            ? verifyField(pokemon.evolutionStage, randomPokemon.evolutionStage)
            : "green"
        }
      >
        {pokemon.evolutionStage.toString()}
      </PokemonInfoCard>
      <PokemonInfoCard
        tone={
          randomPokemon
            ? verifyExactField(pokemon.height, randomPokemon.height)
            : "green"
        }
      >
        {formatMetricValue(pokemon.height)}
      </PokemonInfoCard>
      <PokemonInfoCard
        tone={
          randomPokemon
            ? verifyExactField(pokemon.weight, randomPokemon.weight)
            : "green"
        }
      >
        {formatMetricValue(pokemon.weight)}
      </PokemonInfoCard>
    </div>
  );
}
