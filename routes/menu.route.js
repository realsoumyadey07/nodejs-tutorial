import express from "express";
const router = express.Router();
import Menu from "../models/menu.js";

router.post("/", async (req, res) => {
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

router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    console.log("data has been fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:tast", async (req, res) => {
  try {
    const workTast = req.params.tast;
    if (workTast === "sweet" || workTast === "spicy") {
      const response = await Menu.find({ tast: workTast });
      console.log("data fetched");
      res.status(200).json(response);
    }else{
        res.status(404).json({error: 'invalid route'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'internal server error'});
  }
});

export default router;
