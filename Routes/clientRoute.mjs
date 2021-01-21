import express from "express";
import { regiterFunc, loginFunc } from "../Controllers/client/clientAuth.mjs";
import { locationQueryFunc } from "../Controllers/client/locationQuery.mjs";
import { clientAuth } from "../Middlewares/clientAuth.mjs";
import { bookEventFunc } from "../Controllers/client/bookEvent.mjs";

const router = express.Router();

router.route("/register").post(regiterFunc);

router.route("/login").post(loginFunc);

router.route("/employeeSearch").post(clientAuth, locationQueryFunc);

// router.route("/").post()

router.route("/bookevent").post(clientAuth, bookEventFunc);

const clientRoute = router;

export default clientRoute;
