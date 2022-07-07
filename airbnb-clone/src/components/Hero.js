import React from 'react'
const heroImage = process.env.PUBLIC_URL + '/images/Group.png'
//'../images/Group.png'

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroImage} className="hero--photo" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  )
}
