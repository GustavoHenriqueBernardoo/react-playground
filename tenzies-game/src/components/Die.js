export default function Die(props) {

  return (
    <div>
      <div className="dice" style={{ backgroundColor: props.isHeld ? "#59E391" : "#ffffff" }} >
        {props.value}
      </div>
    </div>
  )
}
