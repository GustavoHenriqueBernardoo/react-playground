import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
  <Hero />

  const cards = data.map(card => {
    return <Card
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      title={card.title}
      price={card.price}
    />
  })
  console.log(data)
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  )
}

            // <Card 
            //     img="katie-zaferes.png"
            //     rating="5.0"
            //     reviewCount={6}
            //     location="USA"
            //     title="Life Lessons with Katie Zaferes"
            //     price={136}
            // />