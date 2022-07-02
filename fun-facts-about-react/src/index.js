import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import logo from './logo.svg'
import './index.css'

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
*/

function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src={logo} alt="react-logo" width="90px" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
  )
}

function MainContent() {
  return (
    <div className="main-content">
      <h1>Reasons Why I'm excited to learn REACT</h1>
      <ol className="main-order-list">
        <li>It's something new</li>
        <li>
          It's good to get my head out of HTML, CSS and Vanilla JS for a while
        </li>
        <li>React seems very fun to learn</li>
        <li>Everything sounds more easy and fast to built</li>
        <li>
          And for all and more reason I'm excited to learn react, to build more
          project, faster and cleaner
        </li>
      </ol>
    </div>
  )
}

function CustomPage() {
  return (
    <div className="page-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<CustomPage />)
