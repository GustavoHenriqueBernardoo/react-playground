import React from "react"

export default function App() {

  const [formData, setFormData] = React.useState(
    {
      email: '',
      password: '',
      passwordConf: '',
      email: '',
      joinedNewsletter: true,

    }
  )

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    // Check if the two password match each other
    formData.password === formData.passwordConf ? console.log("Successfully signed up") : console.log("passwords to not match")

    //if the person checked the "newsletter" checkbox
    formData.joinedNewsletter && console.log("Thanks for signing up for our newsletter!")
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          value={formData.password}
          onChange={handleChange}

        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="passwordConf"
          value={formData.passwordConf}
          onChange={handleChange}

        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinedNewsletter"
            onChange={handleChange}
            checked={formData.joinedNewsletter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
          className="form--submit"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}
