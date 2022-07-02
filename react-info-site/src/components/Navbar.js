import React from "react";
import logo from '../logo.svg'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <img className="nav--icon" src={logo} alt='react-logo'></img>
      <h3 className="nav--logo_text">React Facts</h3>

      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar