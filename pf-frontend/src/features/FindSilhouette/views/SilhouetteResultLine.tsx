import type { Pokemon } from "../../../models/pokemon.model";

type SilhouetteResultLineProps = {
  pokemon: Pokemon;
};

export default function SilhouetteResultLine({
  pokemon,
}: SilhouetteResultLineProps) {
  return (
    <div className="silhouette-result-line">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <span>{pokemon.name}</span>
    </div>
  );
}
