import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React...</h1>
        </header>
        <Person name="Max" age="30" />
        <Person name="Mane" age="25" />
        <Person name="John" age="32">
          My Hobbies: Trekking
        </Person>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Hello world!!!');
  }
}

export default App;
