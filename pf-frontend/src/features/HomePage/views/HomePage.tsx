import RegionPicker from './RegionPicker';
import './styles/HomePage.scss'


export default function HomePage() {
  return (
    <div className="home-page">
      <h2>Régions Pokémon</h2>
      <RegionPicker />
    </div>
  )
}