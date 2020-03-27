import React from "react";
import Person from "./Person/Person";

const persons = props => {
  if (props.showPersons)
    return (
      <div>
        {props.persons.map((p, i) => {
          return (
            <Person
              key={p.id}
              name={p.name}
              age={p.age}
              changed={e => {
                props.changeHandler(e, p.id);
              }}
              click={() => props.deleteHandler(i)}
            />
          );
        })}
      </div>
    );
  else return null;
};
export default persons;
