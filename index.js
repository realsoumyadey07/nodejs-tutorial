import express from "express";
const app = express();
import db from "./db.js";
import Person from "./models/person.js";
import bodyParser from "body-parser";

//middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("welcome from server");
});
app.get("/greencoconut", (req, res) => {
  res.send("Hi this is soumya, and I love coconut");
});
app.post("/person", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
  } catch (error) {
        console.log(error);
        res.status(500).json({error: 'internal server error'});
  }
});
app.get("/person", async (req, res)=>{
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'internal server error'});
  }
})

app.listen(8000, () => {
  console.log("server is running on 8000");
});
