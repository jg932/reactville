import React from 'react'
import { NavLink } from 'react-router-dom'

// Components & Assets
import Logo from '../../assets/react-logo.png'
import Wallet from './Wallet.jsx'

const Nav = (props) => {
  console.log(Logo)
  return (
    <nav className="navigation-bar">
      <NavLink to="/" id="logo"><img src={Logo} alt="react logo"></img></NavLink>
      <NavLink to="/burgers">Burger Shop</NavLink>
      <NavLink to="/market">Super Market</NavLink>
      <Wallet cash={props.cash}/>
    </nav>
  )
}

export default Nav