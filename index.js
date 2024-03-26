import express from "express";
const app = express();
import db from "./db.js";
import Person from "./models/person.js";
import bodyParser from "body-parser";
import Menu from "./models/menu.js";
import  personRoute  from './routes/person.route.js';
import menuRoute from './routes/menu.route.js';


const PORT = process.env.PORT || 8000
//middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("welcome from server");
});
app.get("/greencoconut", (req, res) => {
  res.send("Hi this is soumya, and I love coconut");
});

app.use('/person', personRoute);

app.use('/menu', menuRoute);


app.listen(PORT, () => {
  console.log("server is running on 8000");
});
