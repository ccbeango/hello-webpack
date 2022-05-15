import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello React'
    }
  }

  render() {
    return (
      <h2>{this.state.message}</h2>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))