import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Contato from './components/pages/Contato'
import Instagram from './components/pages/Instagram'


function App() {
  return (
      <Router>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/empresa' element={<Empresa />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/instagram' element={<Instagram />}/>
        </Routes>
      </Router>
  )
}

export default App
