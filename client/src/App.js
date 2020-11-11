import logo from './logo.svg';
import './App.css';
import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    fetch("https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=amsterdam", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "404ada1e15mshc41c87c422d49e7p1b6eebjsn9a6920820be0"
      }
    })
    .then(response => {
      return response.json()
    })
    .then((data)=>console.log(data))
    .catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
