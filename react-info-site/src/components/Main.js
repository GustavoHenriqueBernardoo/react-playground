import React from "react";
import '../components/Main.css'
import logo from '../images/react.png'

function Main() {
  return (
    <main>
      <img className='main--logo' src={logo} alt="react logo"></img>
      <h1 className="main--title">Fun Facts about React</h1>
      <ul className="main--unordered ">
        <li>Was first released in 2013</li>
        <li>Was originally creted by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise app, including mobile apps</li>
      </ul>
    </main>
  )
}

export default Main