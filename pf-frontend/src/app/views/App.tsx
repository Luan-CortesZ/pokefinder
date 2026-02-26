import './styles/App.scss'
import { routers } from '../routes'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ResponsiveLayout from '../../shared/components/Layout/ResponsiveLayout'


function App() {
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
      </div>
    </Router>
  )
}

export default App
