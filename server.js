const express = require("express");
const cors = require("cors");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// Create a new Express app
const app = express();

// Accept cross-origin requests from the frontend app
app.use(cors({ origin: "http://localhost:3001" }));

// Set up Auth0 configuration
const authConfig = {
  domain: "luizaaca.auth0.com",
  audience: "https://api.mysite.com",
};

// Define middleware that validates incoming bearer tokens
// using JWKS from luizaaca.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"],
});

app.get("/api/SAML/Consume", (req, res) => {
  console.log(req);
  res.send({ msg: "ok" });
});

// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!",
  });
});

// Start the app
app.listen(3002, () => console.log("API listening on 3002"));
