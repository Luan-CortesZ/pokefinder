import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './styles/SplashScreen.scss'

export default function SplashScreen() {
  return (
    <div className="splash-screen">
      <div className="splash-panel splash-panel-top">
        <div className="splash-header-wrap">
          <Header />
        </div>
      </div>
			
      <div className="splash-panel splash-panel-bottom">
        <div className="splash-footer-wrap">
          <Footer />
        </div>
      </div>
    </div>
  )
}
