// eslint-disable-next-line
const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "CSE 341 Web Service",
    description: "A web service for CSE 341",
  },
  host: "localhost:8080",
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./src/routes/index.ts"];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
