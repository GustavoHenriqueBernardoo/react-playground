import React from "react";

export default function Star(props) {

  let starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"

  return (
    <img
      src={require(`./images/${starIcon}`)}
      className="card--favorite"
      onClick={props.handleClick}
    />
  )
}