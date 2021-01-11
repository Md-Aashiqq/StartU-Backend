import express from "express";

import { resgisterFunc, loginFunc } from "../Controllers/employeeauth.mjs";
import { employeeDetailRegister } from "../Controllers/employeeDetails.mjs";

import { employeeLocationRegister } from "../Controllers/employeeLocationRegister.mjs";

import { foodRegisterFunc } from "../Controllers/foodRegister.mjs";

import { authToken } from "../Middlewares/authToken.mjs";

const router = express.Router();

router.route("/login").post(loginFunc);

router.route("/register").post(resgisterFunc);

router
  .route("/register/details")
  .post(authToken, employeeDetailRegister, employeeLocationRegister);

router.route("/register/food").post(authToken, foodRegisterFunc);

const employeeRouter = router;

export default employeeRouter;
