import React from "react";

// import Persons from "../components/Persons/Persons";
// import Cockpit from "../components/Cockpit/Cockpit";
// import classes from "./App.css";
// import AuthContext from "../context/auth-context";
import NavBar from "../components/NavBar/NavBar";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import history from "../utils/history";
import PrivateRoute from "../hoc/PrivateRoute";
import ExternalApi from "../views/ExternalApi";

function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/external-api" component={ExternalApi} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

// class App extends Component {
//   state = {
//     persons: [
//       { id: "aaa", name: "Maxi", age: 30 },
//       { id: "aab", name: "Mane", age: 25 },
//       { id: "aac", name: "John", age: 32 },
//     ],
//     showPersons: false,
//     authenticated: false,
//   };

//   togglePersonsHandler = () => {
//     this.setState((prevState, props) => {
//       return { showPersons: !prevState.showPersons };
//     });
//   };

//   nameChangedHandler = (event, id) => {
//     const ev = event.target.value;
//     const ei = id;
//     this.setState((prevState, props) => {
//       const persons = [...prevState.persons];
//       const i = prevState.persons.findIndex((p) => p.id === ei);
//       if (i < 0) return;
//       persons[i].name = ev;
//       return { persons: persons };
//     });
//   };

//   deleteHandler = (index) => {
//     this.setState((prevState, props) => {
//       const persons = [...prevState.persons];
//       persons.splice(index, 1);
//       return { persons: persons };
//     });
//   };

//   authenticationHandler = () => {
//     this.setState({ authenticated: true });
//   };

//   render() {
//     return (
//       <AuthContext.Provider
//         value={{
//           authenticated: this.state.authenticated,
//           login: this.authenticationHandler,
//         }}
//       >
//         <div className={classes.App}>
//           <Cockpit
//             title={this.props.appTitle}
//             personsCount={this.state.persons.length}
//             showPersons={this.state.showPersons}
//             toggleHandler={this.togglePersonsHandler}
//           />
//           <Persons
//             showPersons={this.state.showPersons}
//             persons={this.state.persons}
//             changeHandler={this.nameChangedHandler}
//             deleteHandler={this.deleteHandler}
//           />
//         </div>
//       </AuthContext.Provider>
//     );
//   }
// }

export default App;
