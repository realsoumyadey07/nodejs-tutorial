import express from "express";
const router = express.Router();
import Person from "../models/person.js";

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("data recived");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "invalid route" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      res.status(404).json({ error: "Person not found" });
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedItem = await Person.findByIdAndDelete(userId);
    if (!deletedItem) {
      res.status(404).json({ error: "Person not found" });
    }
    res.status(200).json({message: 'person deleted successfully'});
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'internal server error'});
  }
});

export default router;
