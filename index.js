import express from "express";
const app = express();
import db from "./db.js";
import Person from "./models/person.js";
import bodyParser from "body-parser";
import Menu from "./models/menu.js";
import  personRoute  from './routes/person.route.js';

//middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("welcome from server");
});
app.get("/greencoconut", (req, res) => {
  res.send("Hi this is soumya, and I love coconut");
});

app.use('/person', personRoute);


app.post("/menu", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new Menu(data);
    const response = await newMenu.save();
    console.log("menu has been collected");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
app.get("/menu", async (req, res) => {
  try {
    const data = await Menu.find();
    console.log("data has been fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});



app.listen(8000, () => {
  console.log("server is running on 8000");
});
