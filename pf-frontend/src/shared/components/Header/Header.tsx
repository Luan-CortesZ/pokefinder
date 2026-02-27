import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import './styles/Header.scss'
export default function Header() {
    return (
     <header className="general-header">
        <div className="pokedex-shell">
            <div className="pokedex-topline">
                <span className="lens lens-main"></span>
                <span className="lens lens-red"></span>
                <span className="lens lens-yellow"></span>
                <span className="lens lens-green"></span>
                <span className="logo-sub">Unofficial Pokémon Mini Games - V.0.0.0</span>
            </div>

            <nav className="nav-bar" aria-label="Navigation principale">
                <Link className="logo" to="/">
                    <span className="logo-main">PokéFinder</span>
                </Link>

                <ul>
                    <li className="user-info">
                        <div className="user-meta">
                            <span className="trainer-label">Trainer</span>
                            <span className="trainer-name">John Doe</span>
                        </div>
                        <div className="avatar-menu-wrap">
                            <Avatar
                            className='avatar'
                            alt="John Doe"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 46, height: 46 }}/>

                            <div className="user-dropdown">
                                <Link to="/" role="menuitem">Home</Link>
                                <Link to="/profile" role="menuitem">Profile</Link>
                                <Link to="/profile/pokédex" role="menuitem">Pokédex</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
     </header>
    );
}
