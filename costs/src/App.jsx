import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import NavBar from './components/pages/layout/NavBar'
import Container from './components/pages/layout/Container'
import Projects from './components/Projects'

function App() {

  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/projects' element={<Projects />} />
          <Route path='/company' element={<Company />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newproject' element={<NewProject />} />
        </Routes>
      </Container>

    </Router >
  )
}

export default App
