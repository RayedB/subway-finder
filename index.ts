import express, {Application} from "express"
import {getCoordinates} from './geoLocationController'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const app: Application = express();
const PORT = 8000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:8000/",
      },
    ],
  },
  apis: ["/"],
};

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "./public/swagger.json",
    },
  })
);


  
// TODO: GET REQUEST WITH QUERY PARAMS
app.get('/', getCoordinates)

// TODO: POST REQUEST WITH BODY

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});