import React, { Component } from "react";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import classes from "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: "aaa", name: "Maxi", age: 30 },
      { id: "aab", name: "Mane", age: 25 },
      { id: "aac", name: "John", age: 32 }
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const i = this.state.persons.findIndex(p => p.id === id);
    if (i < 0) return;
    persons[i].name = event.target.value;
    //for cases where old state is needed
    this.setState((prevState, props) => {
      return { persons: persons };
    });
  };

  deleteHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          personsCount={this.state.persons.length}
          showPersons={this.state.showPersons}
          toggleHandler={this.togglePersonsHandler}
        />
        <Persons
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          changeHandler={this.nameChangedHandler}
          deleteHandler={this.deleteHandler}
        />
      </div>
    );
  }
}

export default App;
