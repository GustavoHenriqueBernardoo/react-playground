import React from 'react'

// console.log(faceMeme)

export default function Header() {
  return (
    <header className="header">
      <img
        src="./images/troll-face.png"
        className="header--image"
        alt="meme face"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--text">React Course - Project 3</h4>
    </header>
  )
}
