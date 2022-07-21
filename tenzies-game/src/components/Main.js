import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'

export default function Main() {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeldTrue = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const valueAllTrue = dice.every(die => die.value === firstValue)

    if (allHeldTrue && valueAllTrue) {
      setTenzies(true)
      console.log("YOU WON")
    }

  }, [dice])

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

  function rollDice() {
    if (tenzies) {
      setDice(allNewDice())
      setTenzies(false)
    }
    else {
      setDice(oldDice => oldDice.map(die => die.isHeld ? die : createNewDice()
      ))
    }
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
      {tenzies && <Confetti />}
      <h1 className="main--title">Tenzies</h1>
      <p className="main--subtext">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="die-container">
        {dieElement}
      </div>
      <button
        className="roll-dice"
        onClick={rollDice}
      >
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  )
}