import './styles/Profile.scss'
import cardImage from '../../../assets/images/card-example.png';
import Avatar from '@mui/material/Avatar';

const team = [
  { name: 'Pikachu', type: ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/13.png'], level: 43 },
  { name: 'Dracaufeu', type: ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/10.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/3.png'], level: 52 },
  { name: 'Amphinobi', type: ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/11.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/17.png'], level: 47 },
  { name: 'Lucario', type: ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/2.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/9.png'], level: 45 },
  { name: 'Forgelina', type: ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/18.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/9.png'], level: 45 },
  { name: 'Tyranocif', type: ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/6.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/17.png'], level: 45 },
]

export default function Profile() {
  return (
    <div className="profile-container">
      
      <section className="favorite-card-section">
        <img className="favorite-card" src={cardImage} alt="" />
      </section>
      <section className="profile-page">
        <div className="profile-hero">
          <Avatar
            className="trainer-avatar"
            alt="John Doe"
            sx={{ width: 75, height: 75 }}/>

          <div className="trainer-main">
            <p className="trainer-role">Pokémon Trainer</p>
            <h1>John Doe</h1>
            <div className="trainer-meta">
              <span>Region: Kanto</span>
              <span>Trainer ID: 7421-9912</span>
            </div>
          </div>
        </div>

        <div className="profile-grid">
          <article className="panel stats-panel">
            <h2>Player Stats</h2>
            <div className="stats-list">
              <div>
                <span>Pokemon captured</span>
                <strong>312</strong>
              </div>
              <div>
                <span>Pokemon encountered</span>
                <strong>129</strong>
              </div>
              <div>
                <span>TCG Completion</span>
                <strong>70.7%</strong>
              </div>
              <div>
                <span>Longest Streak</span>
                <strong>18</strong>
              </div>
            </div>
          </article>

          <article className="panel team-panel">
            <h2>Main Team</h2>
            <ul>
              {team.map((pokemon) => (
                <li key={pokemon.name}>
                  <div className="team-member">
                    <Avatar
                      className="pokemon-avatar"
                      alt={pokemon.name}
                      sx={{ width: 46, height: 46 }}/>
                    <div className="poke-info">
                      <strong>{pokemon.name}</strong>
                      <div className="types">
                        {pokemon.type.map((type) => (
                          <img
                            src={type}
                            className="type-icon"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <span>Lv.{pokemon.level}</span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <section className="settings-section">
       <article className="panel settings-panel">
          <h2>Settings</h2>
          <ul>
            
          </ul>
        </article>
      </section>
    </div>
    
  )
}