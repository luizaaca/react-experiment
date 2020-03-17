import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 30 },
      { name: 'Mane', age: 25 },
      { name: 'John', age: 32 }
    ]
  })

const switchNameHandler = () => {
  setPersonsState({
    persons: [
      { name: 'Maximilian', age: 35 },
      { name: 'Mane', age: 25 },
      { name: 'John', age: 32 }
    ]
  })
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React...</h1>
      </header>
      <button onClick={switchNameHandler}>Change Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}>
        My Hobbies: Trekking
      </Person>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  )
  // return React.createElement('div', null, 'h1', 'Hello world!!!');
}

export default app
