import express from "express";
import { regiterFunc, loginFunc } from "../Controllers/client/clientAuth.mjs";

const router = express.Router();

router.route("/register").post(regiterFunc);

router.route("/login").post(loginFunc);

const clientRoute = router;

export default clientRoute;
