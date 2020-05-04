// src/views/ExternalApi.js

import React, { useState } from "react";

const ExternalApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  const authResult = new URLSearchParams(window.location.search);
  const token = authResult.get("token");

  const callApi = async () => {
    try {
      const response = await fetch("https://localhost:44353/api/dados", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();
      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.log(error);
      setShowResult(true);
      setApiMessage("Err:" + error);
    }
  };

  return (
    <React.Fragment>
      <h1>API Data</h1>
      <button onClick={callApi}>Get</button>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
      <p>{token}</p>
    </React.Fragment>
  );
};

export default ExternalApi;
