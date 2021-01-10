// require('dotenv').config()
import dotenv from 'dotenv';
dotenv.config()
import express from "express"
import mongoose from 'mongoose'
const app = express()


// import Routerss

import authRouter from './Routes/employeeRoute.mjs'




// middleware

app.use(express.json());

const port = process.env.PORT || 3000

// Route maintainces 

app.use('/employee', authRouter);

//connect to database


mongoose.connect("mongodb+srv://admin-ashick:Md.aashiq.2801@cluster0.vce2n.mongodb.net/stratup?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex: true})


app.get('/', (req, res) => {  
    res.send({msg : 'hello World!'})
})

app.listen(port, () => {
    console.log(`Server listen in port ${port}`);
})











