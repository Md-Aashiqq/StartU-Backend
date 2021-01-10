import express from "express"

import { resgisterFunc, loginFunc } from "../Controllers/employeeauth.mjs"
import { employeeDetailRegister } from "../Controllers/employeeDetails.mjs"

import { employeeLocationRegister } from "../Controllers/employeeLocationRegister.mjs";

import { authToken } from "../Middlewares/authToken.mjs";

// function dummy(req,res,next) {
//     console.log(req.body)
    
//     next()
// }

const router = express.Router();

router.route('/login').post(loginFunc);

router.route('/register').post(resgisterFunc);

router.route('/register/details').post(authToken,employeeDetailRegister,employeeLocationRegister)

const authRouter = router;

export  default authRouter