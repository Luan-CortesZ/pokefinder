import type { Pokemon } from "../../../models/pokemon.model";
import './styles/PokeBox.scss';

interface PokeBoxProps {
  isHidden?: boolean;
  pokemon: Pokemon
}

export default function PokeBox(props: PokeBoxProps) {
  const {isHidden, pokemon } = props;
  const formattedId = `#${pokemon.id.toString().padStart(3, "0")}`;

  return (
    <div className="pokebox">
      <div className="pokebox-top">
        <div className="pokebox-img-wrapper">
          <img
            className="pokebox-img"
            style={{ filter: isHidden ? 'brightness(0)' : 'none' }}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
        <div className="pokebox-types">
          {pokemon.types.map((type) => (
            <img
              className="pokebox-type-img"
              key={type.type.name}
              src={type.type.url}
              alt={type.type.name}
            />
          ))}
        </div>
      </div>
      <div className="pokebox-footer">
        {isHidden ? '???' : <span className="pokebox-name">{pokemon.name}</span>}
        <span className="pokebox-id">{formattedId}</span>
      </div>
    </div>
  );
}