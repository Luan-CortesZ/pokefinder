import './styles/Profile.scss'
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../../../components/AuthContext/AuthContext';
import { useEffect, useState} from 'react';
import { PokemonService } from '../../../services/pokemon.service';
import { UserService } from '../../../services/user.service';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

interface CapturedPokemon {
  _id: string;
  userId: string;
  pokemonId: number;
  level: number;
  isShiny: boolean;
  capturedAt: string;
  name: string;
}
export default function Profile() {
  const { user } = useAuth();
  const [userPokemons, setUserPokemons] = useState<CapturedPokemon[]>([]);
  const [pokemonCount, setPokemonCount] = useState(0);
  const [latestPokemons, setLatestPokemons] = useState<(CapturedPokemon)[]>([]);
  const [bestStreak, setBestStreak] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);

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
        const sortedPokemons = pokemons.sort((a: CapturedPokemon, b: CapturedPokemon) =>
          new Date(b.capturedAt).getTime() - new Date(a.capturedAt).getTime()
        );
        setUserPokemons(sortedPokemons);
        console.log(sortedPokemons)
        // Get 4 latest with names
        const latest = await Promise.all(
          sortedPokemons.slice(0, 4).map(async (pokemon) => {
            return { ...pokemon };
          })
        );
        setLatestPokemons(latest);

        // Calculate streaks
        calculateStreaks(sortedPokemons);
      } catch (err) {
        console.error("Erreur lors du chargement des pokémons de l'utilisateur", err);
      }
    };
    if (user) {
      fetchUserPokemons(user.id);
    }
  }, [user]);

  const calculateStreaks = (pokemons: CapturedPokemon[]) => {
    if (pokemons.length === 0) {
      setBestStreak(0);
      setCurrentStreak(0);
      return;
    }

    const dates = pokemons.map(p => new Date(p.capturedAt).toDateString()).sort();
    let maxStreak = 1;
    let currentStreakCount = 1;

    for (let i = 1; i < dates.length; i++) {
      const prevDate = new Date(dates[i - 1]);
      const currDate = new Date(dates[i]);
      const diffDays = Math.floor((currDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        currentStreakCount++;
        maxStreak = Math.max(maxStreak, currentStreakCount);
      } else if (diffDays > 1) {
        currentStreakCount = 1;
      }
    }

    setBestStreak(maxStreak);

    const today = new Date();
    let currStreak = 0;
    let checkDate = new Date(today);

    for (let i = 0; i < dates.length; i++) {
      const dateStr = dates[i];
      if (dateStr === checkDate.toDateString()) {
        currStreak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else if (checkDate.getTime() > new Date(dateStr).getTime()) {
        checkDate.setDate(checkDate.getDate() - 1);
        i--;
      } else {
        break;
      }
    }

    setCurrentStreak(currStreak);
  };

  return (
    <div className="profile-container">
      <section className="profile-page">
        <div className="profile-hero">
          <Avatar
            className="trainer-avatar"
            alt={user?.name}
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
            <p className="total-count">{userPokemons.length}/{pokemonCount}</p>
          </article>

          <article className="panel streak-panel">
            <h2>Meilleure série</h2>
            <div className="streak-content">
              <div className="streak-item">
                <CalendarTodayIcon className="streak-icon" />
                <div>
                  <p className="streak-label">Meilleure</p>
                  <p className="streak-value">{bestStreak} jours</p>
                </div>
              </div>
              <div className="streak-item">
                <CalendarTodayIcon className="streak-icon active" />
                <div>
                  <p className="streak-label">Actuelle</p>
                  <p className="streak-value">{currentStreak} jours</p>
                </div>
              </div>
            </div>
          </article>

          <article className="panel latest-panel">
            <h2>4 derniers capturés</h2>
            <div className="latest-list">
              {latestPokemons.map((pokemon, idx) => (
                <div key={idx} className="latest-item">
                  <span className="latest-name">{pokemon.name}</span>
                  <span className={`latest-shiny ${pokemon.isShiny ? 'shiny' : ''}`}>
                    {pokemon.isShiny ? '✨' : 'Lvl ' + pokemon.level}
                  </span>
                </div>
              ))}
            </div>
          </article>

        </div>
      </section>
    </div>
  )
}