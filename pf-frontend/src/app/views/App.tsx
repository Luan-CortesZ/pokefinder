import './styles/App.scss'
import { routers } from '../routes'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ResponsiveLayout from '../../shared/components/Layout/ResponsiveLayout'
import SplashScreen from '../../shared/components/SplashScreen/SplashScreen'
import { useEffect, useState } from 'react'


function App() {
  const [showSplash, setShowSplash] = useState(false)

  useEffect(() => {
    let timer: number | undefined

    const playSplash = () => {
      setShowSplash(true)
      timer = window.setTimeout(() => {
        setShowSplash(false)
      }, 1100)
    }

    if (document.readyState === 'complete') {
      playSplash()
    } else {
      window.addEventListener('load', playSplash, { once: true })
    }

    return () => {
      if (timer !== undefined) {
        window.clearTimeout(timer)
      }
      window.removeEventListener('load', playSplash)
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<ResponsiveLayout/>}>
            {
              routers.map((route, index) => {
                return (<Route path={route.path} element={route.component} key={index}/>)
              })
            }
          </Route>
        </Routes>
        {showSplash && <SplashScreen />}
      </div>
    </Router>
  )
}

export default App
