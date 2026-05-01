import { useAuth } from "../../../components/AuthContext/AuthContext";
import { UserService } from "../../../services/user.service";
import type { CapturedPokemon, Pokemon } from "../../../models/pokemon.model";
import './styles/PokeBox.scss';
import sparkleIcon from '../../../assets/images/sparkle.png';

interface PokeBoxProps {
  pokemon: Pokemon;
  captured: CapturedPokemon | undefined;
}

export default function PokeBox(props: PokeBoxProps) {
  const {pokemon, captured } = props;
  const {user} = useAuth();
  const formattedId = `#${pokemon.id.toString().padStart(3, "0")}`;
  async function capturePokemon(){
    if(user) await UserService.capturePokemon(user._id, pokemon.id )
  }

  return (
    <div className="pokebox">
      {captured?.isShiny ? <img className="shiny-ind" src={sparkleIcon} alt="" /> : null }
      <div className="pokebox-top">
        <div className="pokebox-img-wrapper">
          <img
            onClick={capturePokemon}  
            className="pokebox-img"
            style={{ filter: !captured ? 'brightness(0)' : 'none' }}
            src={captured?.isShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
        <div className="pokebox-types">
          {pokemon.types.map((type) => (
            <img
              className="pokebox-type-img"
              key={type.name}
              src={type.url}
              alt={type.name}
            />
          ))}
        </div>
      </div>
      <div className="pokebox-footer">
        {!captured ? '???' : <span className="pokebox-name">{pokemon.name}</span>}
        <span className="pokebox-id">{formattedId}</span>
      </div>
    </div>
  );
}