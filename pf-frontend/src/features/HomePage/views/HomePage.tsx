import { Link } from 'react-router-dom';
import { useAuth } from '../../../components/AuthContext/AuthContext';
import RegionPicker from './RegionPicker';
import './styles/HomePage.scss'


export default function HomePage() {
  const {user, isAuthenticated} = useAuth();

  return (
    <div className="home-page">
      {isAuthenticated ? (
        <div>
          <h1>Bienvenue, {user?.name} !</h1>
          <h2>Régions Pokémon</h2>
          <RegionPicker />
        </div>
      ) : (
        <div className="welcome-message">
          <h1>Bienvenue sur PokéFinder !</h1>
          <Link className="guest-action-btn" to="/register">
            Créer un compte
          </Link>
        </div>
      )}
    </div>
  )
}