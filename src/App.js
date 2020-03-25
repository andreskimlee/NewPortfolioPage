import React from 'react';
import './App.css';
import NavBar from './Navbar.jsx'
import Loading from './loading.gif'
import LoadingText from './loading-text.gif';
import MainContainer from './Main.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ loaded: true });
      }
        .bind(this),
      3000
    );
  }

  render() {
    let loaded;
    if (this.state.loaded) {
      loaded = <div>
        <NavBar></NavBar>
        <MainContainer></MainContainer>
      </div>
    } else {
      loaded = <div className="loading-container">
        <img className="loading-logo" src={Loading} alt="loading"></img>
        <img className="loading-text" src={LoadingText} alt="loading-text"></img>
      </div>

    }
    return (
      <div>
        {loaded}
      </div>
    )
  }
}

export default App;
