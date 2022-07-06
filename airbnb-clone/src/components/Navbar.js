import React from 'react'
import airbnblogo from '../images/airbnb-logo.png'
//airbnb-logo.png

export default function Navbar() {
  return (
    <nav>
      <img src={airbnblogo} alt='logo' className="nav-logo"></img>
    </nav>
  )
}