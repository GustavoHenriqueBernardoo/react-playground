export default function Die(props) {

  return (
    <div>
      <div className="dice"

        style={{ backgroundColor: props.isHeld ? "#59E391" : "#ffffff" }}
        onClick={() => props.holdDice(props.id)}
      >
        {props.value}
      </div>
    </div>
  )
}
