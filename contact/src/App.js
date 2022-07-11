import React from "react"
import userImg from "./images/user.png"
// import starImg from "./images/"
import Star from "./Star"

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })


  function toggleFavorite() {
    setContact(prevState => {
      return {
        ...prevState,
        isFavorite: !prevState.isFavorite
      }
    })
  }

  return (
    <main>
      <article className="card">
        <img src={userImg} className="card--image" />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  )
}
