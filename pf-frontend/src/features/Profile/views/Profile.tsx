import './styles/Profile.scss'
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../../../components/AuthContext/AuthContext';
import { useEffect, useState} from 'react';
import { PokemonService } from '../../../services/pokemon.service';
import { UserService } from '../../../services/user.service';

export default function Profile() {
  const { user } = useAuth();
  const [userPokemons, setUserPokemons] = useState([]);
  const [pokemonCount, setPokemonCount] = useState(0);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await PokemonService.getPokemonCount();
          setPokemonCount(data);
        } catch (err) {
          console.error("Erreur lors du chargement", err);
        }
      };
      fetchData();
    }, []);

  useEffect(() => {
    const fetchUserPokemons = async (id: string) => {
      try {
        const pokemons = await UserService.getUsersPokemon(id);
        setUserPokemons(pokemons);
      } catch (err) {
        console.error("Erreur lors du chargement des pokémons de l'utilisateur", err);
      }
    };
    if (user) {
      console.log(user);
      
      fetchUserPokemons(user.id);
    }
  }, [user]);

  return (
    <div className="profile-container">
      <section className="profile-page">
        <div className="profile-hero">
          <Avatar
            className="trainer-avatar"
            alt="John Doe"
            sx={{ width: 75, height: 75 }}/>

          <div className="trainer-main">
            <p className="trainer-role">Pokémon Trainer</p>
            <h1>{user?.name}</h1>
            <div className="trainer-meta">
              <span>Trainer ID: 7421-9912</span>
            </div>
          </div>
        </div>

        <div className="profile-grid">
          <article className="panel stats-panel">
            <h2>Captures totales</h2>
            <p>{userPokemons.length}/{pokemonCount}</p>
          </article>

        </div>
      </section>
    </div>
    
  )
}