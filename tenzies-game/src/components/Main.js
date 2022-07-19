/**
 * Challenge: Add conditional styling to the Die component
 * so that if it's held (isHeld === true), its background color
 * changes to a light green (#59E391)
 * 
 * Remember: currently the Die component has no way of knowing
 * if it's "held" or not.
 */

import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function Main() {

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(
        {
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid()
        })
    }
    return newDice
  }



  const [dice, setDice] = React.useState(allNewDice())

  const dieElement = dice.map(die => {
    return (
      <Die
        value={die.value}
        isHeld={die.isHeld}
        key={die.id}
      />
    )

  })

  function rollDice() {
    setDice(allNewDice())
  }


  return (
    <main className="main">
      <h1 className="main--title">Tenzies</h1>
      <p className="main--subtext">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="die-container">
        {dieElement}
      </div>
      <button
        className="roll-dice"
        onClick={rollDice}
      >
        Roll
      </button>
    </main>
  )
}