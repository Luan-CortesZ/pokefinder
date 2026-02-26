import { BrowserRouter } from 'react-router-dom'
import './styles/App.scss'
import HomePage from '../../features/HomePage/views/HomePage'
import Header from '../../shared/components/Header/Header'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <HomePage />
    </BrowserRouter>
  )
}

export default App
