import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";

const person = props => (
  <Fragment>
    <div className={classes.Person}>
      <p onClick={props.click}>
        I 'm {props.name} and I' m {props.age} years old!
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  </Fragment>
);

person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default person;
