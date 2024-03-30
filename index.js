import express from "express";
const app = express();
import db from "./db.js";
import bodyParser from "body-parser";
import  personRoute  from './routes/person.route.js';
import menuRoute from './routes/menu.route.js';
import passport from './auth.js';


const PORT = process.env.PORT || 8000
//middleware
app.use(bodyParser.json());


const logRequest = (req, res, next)=>{
  console.log(`date: [${new Date().toISOString()}] request made to: ${req.originalUrl}`);
  next();
}

app.use(logRequest);


app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local', {session: false});
app.get("/", localAuthMiddleware, (req, res) => {
  res.send("welcome from server");
});
app.get("/greencoconut", (req, res) => {
  res.send("Hi this is soumya, and I love coconut");
});

app.use('/person', localAuthMiddleware, personRoute);

app.use('/menu', menuRoute);


app.listen(PORT, () => {
  console.log("server is running on 8000");
});
