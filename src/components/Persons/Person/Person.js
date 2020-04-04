import React, { Fragment, useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
import AuthContext from "../../../context/auth-context";

const person = props => {
  const inputRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    inputRef.current.focus();
    return () => {};
  }, []);

  return (
    <Fragment>
      <div className={classes.Person}>
        <p onClick={props.click}>
          I 'm {props.name} and I' m {props.age} years old!
        </p>
        <input
          type="text"
          ref={inputRef}
          onChange={props.changed}
          value={props.name}
        />
        {authContext.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in.</p>
        )}
        <AuthContext.Consumer>
          {context =>
            context.authenticated ? (
              <p>Authenticated!</p>
            ) : (
              <p>Please log in.</p>
            )
          }
        </AuthContext.Consumer>
      </div>
    </Fragment>
  );
};

person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default person;
