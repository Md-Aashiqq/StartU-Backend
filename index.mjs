// require('dotenv').config()
import dotenv from 'dotenv';
dotenv.config()
import express from "express"
const app = express()


// import Routerss

import authRouter from './Routes/authRoute.mjs'




// middleware

app.use(express.json());

const port = process.env.PORT || 3000

// Route maintainces 

app.use('/auth', authRouter);



app.get('/', (req, res) => {  
    res.send({msg : 'hello World!'})
})

app.listen(port, () => {
    console.log(`Server listen in port ${port}`);
})











