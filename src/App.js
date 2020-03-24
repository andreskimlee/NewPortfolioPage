import React from 'react';
import './App.css';
import NavBar from './Navbar'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
      </div>
    )
  }
}

export default App;
