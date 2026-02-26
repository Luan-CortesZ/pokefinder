import './styles/Header.scss'
export default function Header() {
    return (
     <header className="general-header">
        <nav className="nav-bar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
     </header>
    );
}
