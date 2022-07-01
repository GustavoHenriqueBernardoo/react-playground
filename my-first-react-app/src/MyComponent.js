import React, { Component } from 'react'

class MyComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, onButtonClicked } = this.props
    return (
      <div>
        <h1>This is a tittle: {title}</h1>
        <button onClick={onButtonClicked}>Click me!</button>
      </div>
    )
  }
}

export default MyComponent