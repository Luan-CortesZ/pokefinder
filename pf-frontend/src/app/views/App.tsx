import './styles/App.scss'
import { routers } from '../routes'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ResponsiveLayout from '../../shared/components/Layout/ResponsiveLayout'
import SplashScreen from '../../shared/components/SplashScreen/SplashScreen'
import { useEffect, useState } from 'react'


function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowSplash(false)
    }, 1100)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <Router>
      <div className="App">
        {
          showSplash ? (
            <SplashScreen />
          ) : (
            <Routes>
              <Route path='/' element={<ResponsiveLayout/>}>
                {
                  routers.map((route, index) => {
                    return (<Route path={route.path} element={route.component} key={index}/>)
                  })
                }
              </Route>
            </Routes>
          )
        }
      </div>
    </Router>
  )
}

export default App
