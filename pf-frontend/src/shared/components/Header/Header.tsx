import { Avatar } from '@mui/material';
import './styles/Header.scss'
export default function Header() {
    return (
     <header className="general-header">

        <nav className="nav-bar">
            <a className="logo" href="/">PokéFinder!</a>
            <ul>
                <li className="user-info">
                    John Doe 
                    <a href="/profile">
                        <Avatar 
                        className='avatar' 
                        alt="John Doe" 
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 42, height: 42 }}/>
                    </a>
                </li>
            </ul>
        </nav>
     </header>
    );
}
