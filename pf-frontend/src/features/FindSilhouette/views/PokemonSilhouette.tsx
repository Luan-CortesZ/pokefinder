import { useEffect, useState } from "react";
import { PokemonService } from "../../../services/pokemon.service";
import { useLocation } from "react-router-dom";
import "./styles/FindSilhouette.scss";
import type { Pokemon } from "../../../models/pokemon.model";
import PokemonSearch from "../../FindPokemon/PokemonSearch";
import { useAuthenticatedUser } from "../../../components/AuthContext/AuthContext";
import { UserService } from "../../../services/user.service";
import SilhouetteResultLine from "./SilhouetteResultLine";
import SilhouetteCard from "./SilhouetteCard";

type FindPokemonLocationState = {
  regionId?: number;
  regionName?: string;
};

export default function PokemonSilhouette() {
  const location = useLocation();
  const locationState =
    (location.state as FindPokemonLocationState | null) ?? null;
  const regionId = locationState?.regionId ?? 1;
  const regionName = locationState?.regionName ?? "Kanto";
  const user = useAuthenticatedUser();

  // The random Pokemon selected
  const [randomPokemon, setRandomPokemon] = useState<Pokemon>();
  // The pokemon selected by the player
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon>();
  // The all pokemons to "choose" the random pokemon
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  // Array used to show the guess of the player
  const [pokemonResearched, setPokemonResearched] = useState<Pokemon[]>([]);

  const [isFound, setIsFound] = useState<boolean>(false);

  const handlePokemonSelected = (pokemonName: string | null) => {
    // Va vérifier si le joueur a sélectionner un pokemon et retourner l'objet pokemon
    const selected = pokemons.find((p) => p.name === pokemonName);
    // Si aucune n'est choisi => return ide
    if (!selected) return;

    // Ajoute le guess du player en haut de la liste
    setPokemonResearched((prev) => [selected, ...prev]);
    // "Changer" le pokemon sélectionné par le user
    setPokemonSelected(selected);

    // condition pour vérifier si le joueur a trouvé
    // S'il n'a pas trouvé, on enlève le pokemon de la liste dispo
    if (selected.name !== randomPokemon?.name) {
      setPokemons((prev) =>
        prev.filter((pokemon) => pokemon.name !== selected.name),
      );
    }
    // S'il a trouvé on appelle la fonction "capturePokemon"
    else {
      UserService.capturePokemon(user.id, selected.id);
      setIsFound(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const regionPokemons =
          await PokemonService.getPokemonsByRegion(regionId);
        setPokemons(regionPokemons);
        setPokemonResearched([]);
        setPokemonSelected(undefined);
        setIsFound(false);

        const randomIndex = Math.floor(Math.random() * regionPokemons.length);
        setRandomPokemon(regionPokemons[randomIndex]);
      } catch (err) {
        console.error("Erreur lors du chargement", err);
      }
    };

    fetchData();
  }, [regionId]);

  if (!randomPokemon) return null;
  return (
    <section className="find-silhouette-page">
      <h1>Find Silhouette</h1>
      <h2>{regionName}</h2>

      <PokemonSearch
        pokemons={pokemons}
        onPokemonSelected={handlePokemonSelected}
        targetPokemonName={randomPokemon?.name}
      />
      <SilhouetteCard
        pokemon={randomPokemon}
        isFound={isFound}
        numberOfAttempt={pokemonResearched.length}
      />

      <div>
        <div className="pokemon-results-list">
          {pokemonResearched.map((pokemon) => (
            <SilhouetteResultLine
              key={pokemon.id}
              // key={`${pokemon.id}-${index}`}
              pokemon={pokemon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
