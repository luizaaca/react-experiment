import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  let assignedClasses = [];
  if (props.personsCount <= 2) assignedClasses.push(classes.red);
  if (props.personsCount <= 1) assignedClasses.push(classes.bold);

  let buttonClasses = props.showPersons ? classes.Red : "";

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>People</p>
      <button className={buttonClasses} onClick={props.toggleHandler}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
