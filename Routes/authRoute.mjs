import express from "express"

import { resgisterFunc , loginFunc } from "../Controllers/employeeauth.mjs"

const router = express.Router();


router.route('/login').post(loginFunc);

router.route('/register').post(resgisterFunc)

const authRouter = router;

export  default authRouter