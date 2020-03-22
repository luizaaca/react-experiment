import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "aaa", name: "Maxi", age: 30 },
      { id: "aab", name: "Mane", age: 25 },
      { id: "aac", name: "John", age: 32 }
    ],
    showPersons: false
  };

  switchNameHandler = newValue => {
    this.setState({
      persons: [
        { id: "aaa", name: newValue, age: 35 },
        { id: "aab", name: "Mane", age: 25 },
        { id: "aac", name: "John", age: 32 }
      ]
    });
  };

  nameChangedHandler = (event, id) => {
    console.log(event.target.value, id);
    const persons = [...this.state.persons];
    const i = this.state.persons.findIndex(p => p.id === id);
    if (i < 0) return;
    persons[i].name = event.target.value;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deleteHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      marginTop: "15px"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, i) => {
            return (
              <Person
                key={p.id}
                name={p.name}
                age={p.age}
                changed={e => {
                  this.nameChangedHandler(e, p.id);
                }}
                click={() => this.deleteHandler(i)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React...</h1>
        </header>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
