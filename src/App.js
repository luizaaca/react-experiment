import React, { Component } from "react";
import Person from "./Person/Person";
import styled from "styled-components";
import "./App.css";

const StyledButton = styled.button`
  background-color: ${props => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    background-color: ${props => (props.alt ? "#F56" : "lightgreen")};
    color: black;
  }
`;

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

    let classes = [];

    if (this.state.persons.length <= 2) classes.push("red");
    if (this.state.persons.length <= 1) classes.push("bold");

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p className={classes.join(" ")}>Persons</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
