import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'

import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
*/

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
