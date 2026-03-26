import RegionPicker from './RegionPicker';
import './styles/HomePage.scss'


export default function HomePage() {
  return (
    <div className="home-page">
      <h1>HomePage!</h1>
      <h2>Régions Pokémon</h2>
      <RegionPicker />
    </div>
  )
}