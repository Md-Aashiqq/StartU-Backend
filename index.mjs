// require('dotenv').config()
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
const app = express();

// import Routerss

import employeeRouter from "./Routes/employeeRoute.mjs";

import clientRoute from "./Routes/clientRoute.mjs";

// middleware

app.use(express.json());

//connect to database
mongoose.connect(
  "mongodb+srv://admin-ashick:Md.aashiq.2801@cluster0.vce2n.mongodb.net/stratup?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  }
);

// Employee Route maintainces

app.use("/employee", employeeRouter);

// Client Route Maintainces

app.use("/client", clientRoute);

app.get("/", (req, res) => {
  res.send({ msg: "hello World!" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listen in port ${port}`);
});
