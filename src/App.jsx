import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import SuperMarket from './Components/SuperMarket/SuperMarket'
import Nav from './Components/Nav/Nav'

// Components
import Landing from './Components/Landing/Landing'

const App = () => {
  const [cash, setCash] = useState(100)
  return (
    <>
      <main>
        <Nav cash={cash}/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/burgers" element={<BurgerShop />} />
          <Route path='/market'/>
        </Routes>
      </main>
    </>
  )
}

export default App