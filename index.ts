import express from "express"
import {getCoordinates} from './geoLocationController'

const app = express();
const PORT = 8000;

app.get('/', getCoordinates)
  
// TODO: GET REQUEST WITH QUERY PARAMS
app.get('')
// TODO: POST REQUEST WITH BODY

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});