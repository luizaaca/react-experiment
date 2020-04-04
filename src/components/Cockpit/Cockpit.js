import React, { useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = props => {
  const authContext = useContext(AuthContext);

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
      <button onClick={authContext.login}>Log in</button>
      {/* <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer> */}
    </div>
  );
};

export default React.memo(cockpit);
