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
  const pokemonTypes = pokemon.types.map((entry) => entry.type.name);
  const randomPokemonTypes = randomPokemon?.types.map((entry) => entry.type.name) ?? [];

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

  const verifyTypes = (
    searchedTypes: string[],
    targetTypes: string[],
  ): "green" | "yellow" | "red" => {
    const hasSameTypes =
      searchedTypes.length === targetTypes.length &&
      searchedTypes.every((type) => targetTypes.includes(type));

    if (hasSameTypes) {
      return "green";
    }

    const hasCommonType = searchedTypes.some((type) => targetTypes.includes(type));

    return hasCommonType ? "yellow" : "red";
  };

  const typesTone = randomPokemon ? verifyTypes(pokemonTypes, randomPokemonTypes) : "green";

  return (
    <div className="pokemon-result-line">
      <PokemonInfoCard tone="image" label={pokemon.name}>
        <img
          className="pokebox-img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </PokemonInfoCard>
      <PokemonInfoCard tone={typesTone}>
        {pokemon.types[0].type.name}
      </PokemonInfoCard>
      <PokemonInfoCard tone={typesTone}>
        {pokemon.types[1]?.type.name ?? "-"}
      </PokemonInfoCard>
      <PokemonInfoCard
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
      </PokemonInfoCard>
      <PokemonInfoCard
        tone={randomPokemon ? verifyField(pokemon.id, randomPokemon.id) : "green"}
      >
        {pokemon.id.toString()}
      </PokemonInfoCard>
      <PokemonInfoCard
        tone={
          randomPokemon
            ? verifyField(pokemon.height, randomPokemon.height)
            : "green"
        }
      >
        {pokemon.height.toString()}
      </PokemonInfoCard>
      <PokemonInfoCard
        tone={
          randomPokemon
            ? verifyField(pokemon.weight, randomPokemon.weight)
            : "green"
        }
      >
        {pokemon.weight.toString()}
      </PokemonInfoCard>
    </div>
  );
}
