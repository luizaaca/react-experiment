import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 30 },
      { name: "Mane", age: 25 },
      { name: "John", age: 32 }
    ]
  };

  switchNameHandler = newValue => {
    this.setState({
      persons: [
        { name: newValue, age: 35 },
        { name: "Mane", age: 25 },
        { name: "John", age: 32 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React...</h1>
        </header>
        <button
          onClick={/*don't use this way*/ () => this.switchNameHandler("Joan")}
        >
          Change Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "José")}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
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
