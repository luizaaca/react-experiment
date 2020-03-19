import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Maxi", age: 30 },
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

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Maxi", age: 35 },
        { name: event.target.value, age: 25 },
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
        <button onClick={this.switchNameHandler.bind(this, "José")}>
          Change Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Trekking
        </Person>
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Hello world!!!');
  }
}

export default App;
