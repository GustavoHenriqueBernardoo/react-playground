import React from 'react'

export default function Joke(props) {
  /**
   * Challenge:
   * - Only display the punchline paragraph if `isShown` is true
   */

  const [isShown, setIsShown] = React.useState(false)

  function toggleShown() {
    console.log('work')
    setIsShown((prevIsShown) => !prevIsShown)
  }

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggleShown}>
        {isShown ? 'Hide' : 'Show'} Punchline
      </button>
      <hr />
    </div>
  )
}
