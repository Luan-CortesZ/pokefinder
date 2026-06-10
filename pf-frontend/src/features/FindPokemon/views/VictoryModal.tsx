import { useNavigate } from "react-router-dom";
import type { Pokemon } from "../../../models/pokemon.model";
import "./styles/VictoryModal.scss";

type VictoryModalProps = {
  pokemon: Pokemon;
  regionName: string;
  regionId: number;
  nextGamePath: string;
  nextGameLabel: string;
};

export default function VictoryModal({
  pokemon,
  regionName,
  regionId,
  nextGamePath,
  nextGameLabel,
}: VictoryModalProps) {
  const navigate = useNavigate();

  return (
    <div className="victory-overlay">
      <div className="victory-modal">
        <img
          className="victory-pokemon-img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <h2 className="victory-title">Bravo !</h2>
        <p className="victory-subtitle">
          Tu as trouvé <strong>{pokemon.name}</strong> !
        </p>

        <div className="victory-actions">
          <button
            type="button"
            className="victory-btn primary"
            onClick={() =>
              navigate(nextGamePath, {
                state: { regionName, regionId },
              })
            }
          >
            {nextGameLabel}
          </button>
          <button
            type="button"
            className="victory-btn secondary"
            onClick={() => navigate("/")}
          >
            Menu principal
          </button>
        </div>
      </div>
    </div>
  );
}
