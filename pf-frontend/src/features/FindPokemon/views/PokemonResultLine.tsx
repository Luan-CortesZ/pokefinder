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
  const randomPokemonTypes = randomPokemon?.types.map((entry) => entry.name) ?? [];

  const verifyField = (
    searchedValue: string | number,
    randomValue: string | number,
  ): "green" | "yellow" | "red" => {
    if (searchedValue === randomValue) {
      return "green";
    }

    if (
      typeof searchedValue === "number" &&
      typeof randomValue === "number"
    ) {
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
    ? verifyTypeSlot(
        pokemonTypes[0],
        randomPokemonTypes[0],
        randomPokemonTypes,
      )
    : "green";
  const type2Tone = randomPokemon
    ? verifyTypeSlot(
        pokemonTypes[1],
        randomPokemonTypes[1],
        randomPokemonTypes,
      )
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
      <PokemonInfoCard tone={type2Tone}>
        {pokemon.types[1]?.name ?? "-"}
      </PokemonInfoCard>
      {/* <PokemonInfoCard
        tone={
          randomPokemon
            ? verifyField(
                pokemon.location_area_encounters,
                randomPokemon.location_area_encounters,
              )
            : "green"
        }
      >
        {pokemon.location_area_encounters}
      </PokemonInfoCard> */}
      <PokemonInfoCard
        tone={randomPokemon ? verifyField(pokemon.id, randomPokemon.id) : "green"}
      >
        {pokemon.id.toString()}
      </PokemonInfoCard>
      <PokemonInfoCard tone="red">-</PokemonInfoCard> {/* TODO stade évolution, pas encore implémenté  */}
      <PokemonInfoCard
        tone={
          randomPokemon
            ? verifyExactField(pokemon.height, randomPokemon.height)
            : "green"
        }
      >
        {pokemon.height.toString()}
      </PokemonInfoCard>
      <PokemonInfoCard
        tone={
          randomPokemon
            ? verifyExactField(pokemon.weight, randomPokemon.weight)
            : "green"
        }
      >
        {pokemon.weight.toString()}
      </PokemonInfoCard>
    </div>
  );
}
