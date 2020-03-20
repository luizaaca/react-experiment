import React from "react";

const userInput = props => {
  return (
    <div>
      <p>
        Input:
        <input type="text" onChange={props.changed} value={props.value} />
      </p>
    </div>
  );
};

export default userInput;
