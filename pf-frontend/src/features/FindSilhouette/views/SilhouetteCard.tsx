import type { ReactNode } from "react";
import type { Pokemon } from "../../../models/pokemon.model";
import "./styles/FindSilhouette.scss";

type SilhouetteInfoCardProps = {
  pokemon: Pokemon;
  isFound?: boolean;
  numberOfAttempt: number;
};

export default function SilhouetteCard({
  pokemon,
  isFound = false,
  numberOfAttempt,
}: SilhouetteInfoCardProps) {
  return (
    <div className="silhouette-container">
      <img
        style={{
          width: `${Math.min(160, 100 + numberOfAttempt * 15)}px`,
          height: `${Math.min(160, 100 + numberOfAttempt * 15)}px`,
          transition: "width 0.5s ease, height 0.5s ease",
          filter: isFound
            ? "none"
            : `brightness(0) blur(${Math.max(5, 9 - numberOfAttempt * 1.5)}px)`,
        }}
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
    </div>
  );
}
