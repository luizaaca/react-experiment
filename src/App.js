import React, { Component } from "react";
import Person from "./Person/Person";
import classes from "./App.css";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
    let persons = null;
    let buttonClasses = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, i) => {
            return (
              <ErrorBoundary>
                key={p.id}
                <Person
                  name={p.name}
                  age={p.age}
                  changed={e => {
                    this.nameChangedHandler(e, p.id);
                  }}
                  click={() => this.deleteHandler(i)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      buttonClasses.push(classes.Red);
    }

    let assignedClasses = [];

    if (this.state.persons.length <= 2) assignedClasses.push(classes.red);
    if (this.state.persons.length <= 1) assignedClasses.push(classes.bold);

    return (
      <div className={classes.App}>
        <h1>Hello World!</h1>
        <p className={assignedClasses.join(" ")}>Persons</p>
        <button
          className={buttonClasses.join(" ")}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
