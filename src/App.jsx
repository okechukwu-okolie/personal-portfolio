import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './pages/Home'
import About from './pages/About'
import Client from './pages/Client'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'


function App() {
  

  return (
    <>
    <Header />
      <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/client' element={<Client/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
