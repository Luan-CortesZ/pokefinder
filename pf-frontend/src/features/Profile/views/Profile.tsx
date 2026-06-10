import './styles/Profile.scss'
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../../../components/AuthContext/AuthContext';
import { useEffect, useState, useMemo } from 'react';
import { PokemonService } from '../../../services/pokemon.service';
import { UserService } from '../../../services/user.service';
import type { CapturedPokemon } from '../../../models/pokemon.model';

export default function Profile() {
  const { user } = useAuth();
  const [userPokemons, setUserPokemons] = useState<CapturedPokemon[]>([]);
  const [pokemonCount, setPokemonCount] = useState(0);
  const [latestPokemons, setLatestPokemons] = useState<CapturedPokemon[]>([]);

  const shinyCount = useMemo(() => {
    return userPokemons.filter(p => p.isShiny).length;
  }, [userPokemons]);

  const highestLevelPokemon = useMemo(() => {
    return userPokemons.length > 0 
      ? userPokemons.reduce((max, p) => (p.level > max.level ? p : max), userPokemons[0]) 
      : null;
  }, [userPokemons]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await PokemonService.getPokemonCount();
        setPokemonCount(data);
      } catch (err) {
        console.error("Erreur lors du chargement du compteur global", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchUserPokemons = async () => {
      try {
        const pokemons = await UserService.getUsersPokemon();
        
        const sortedPokemons = [...pokemons].sort((a: CapturedPokemon, b: CapturedPokemon) =>
          new Date(b.capturedAt).getTime() - new Date(a.capturedAt).getTime()
        );
        
        setUserPokemons(sortedPokemons);
        
        setLatestPokemons(sortedPokemons.slice(0, 4));

      } catch (err) {
        console.error("Erreur lors du chargement des pokémons de l'utilisateur", err);
      }
    };

    if (user) {
      fetchUserPokemons();
    }
  }, [user]);


  return (
    <div className="profile-container">
      <section className="profile-page">
        <div className="profile-hero">
          <Avatar
            className="trainer-avatar"
            alt={user?.name}
            sx={{ width: 75, height: 75 }}
          />

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
          <h2>Statistiques du dresseur</h2>
          <div className="stats-details">
            <p><strong>Captures totales :</strong> <span className="total-count">{userPokemons.length} / {pokemonCount}</span></p>
            <p><strong>Pokémons Shiny :</strong> {shinyCount}</p>
            <p><strong>Plus haut niveau :</strong> {highestLevelPokemon ? `${highestLevelPokemon.name} (Lvl ${highestLevelPokemon.level})` : 'Aucun'}</p>
          </div>
          </article>

          <article className="panel latest-panel">
            <h2>4 derniers capturés</h2>
            <div className="latest-list">
              {latestPokemons.length > 0 ? (
                latestPokemons.map((pokemon, idx) => (
                  <div key={pokemon.id || idx} className="latest-item">
                    <span className="latest-name">{pokemon.name}</span>
                    <span className={`latest-shiny ${pokemon.isShiny ? 'shiny' : ''}`}>
                      {pokemon.isShiny ? '✨ Shiny' : `Lvl ${pokemon.level}`}
                    </span>
                  </div>
                ))
              ) : (
                <p className="empty-message">Aucun Pokémon capturé pour le moment.</p>
              )}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}