import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import './styles/App.css'

// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import SuperMarket from './Components/SuperMarket/SuperMarket'
import Nav from './Components/Nav/Nav'

const App = () => {
  const [cash, setCash] = useState(100)

  const handleExchange = (amount) => {
    if (cash - amount < 0) return false
    setCash((cash - amount).toFixed(2))
    return true
  }

  return (
    <>
      <main>
        <Nav cash={cash} set/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/burgers" element={<BurgerShop />} />
          <Route path='/market'element={<SuperMarket handleExchange={handleExchange}/>} />
        </Routes>
      </main>
    </>
  )
}

export default App