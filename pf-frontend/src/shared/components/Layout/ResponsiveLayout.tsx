import { Outlet } from 'react-router-dom'
import './ResponsiveLayout.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function ResponsiveLayout() {
  return (
    <div className="responsive-container">
      <Header/>
      <main className="main-content"><Outlet/></main>
      <Footer/>
    </div>
  )
}

export default ResponsiveLayout