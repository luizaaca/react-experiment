import React, { Fragment } from "react";
import classes from "./Person.css";

const person = props => (
  <Fragment>
    <div className={classes.Person}>
      <p onClick={props.click}>
        I 'm {props.name} and I' m {props.age} years old! - {props.children}
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  </Fragment>
);

export default person;
