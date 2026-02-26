import { Outlet } from 'react-router-dom'
import './ResponsiveLayout.scss'
import Header from '../Header/Header'

function ResponsiveLayout() {
  return (
    <div className="responsive-container">
      <Header/>
      <main className="main-content"><Outlet/></main>
    </div>
  )
}

export default ResponsiveLayout