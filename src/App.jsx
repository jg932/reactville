import React from 'react'
import { Routes, Route } from 'react-router'
import './styles/App.css'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'

// Components
import Landing from './Components/Landing/Landing'

const App = () => {
  return (
    
    <main>
      <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} >
        <Route path="/burgers" element={<BurgerShop />} />
        </Route>
      </Routes>
      </>
    </main>
  )
}

export default App