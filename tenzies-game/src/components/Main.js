

import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function Main() {

  const [dice, setDice] = React.useState(allNewDice())

  function createNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(createNewDice())
    }
    return newDice
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map((die) => id === die.id ? { ...die, isHeld: !die.isHeld } : die))
  }

  /**
 * Challenge: Update the `rollDice` function to not just roll
 * all new dice, but instead to look through the existing dice
 * to NOT role any that are being `held`.
 * 
 * Hint: this will look relatively similiar to the `holdDice`
 * function below. When creating new dice, remember to use
 * `id: nanoid()` so any new dice have an `id` as well.
 */

  function rollDice() {
    setDice(oldDice => oldDice.map(die => die.isHeld ? die : createNewDice()))
  }

  const dieElement = dice.map(die => {
    return (
      <Die
        value={die.value}
        isHeld={die.isHeld}
        key={die.id}
        id={die.id}
        holdDice={holdDice}
      />
    )

  })

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