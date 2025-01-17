import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import employeeModel from "../Models/employee/employeeModel.mjs";
// import { food } from "../util/food.js";
// import foodModel from "../Models/util/food.mjs";

// import employeeLocationModel from "../Models/employee/employeeLocation.mjs";

// import crypto from "crypto";

//@ desc post method to the employee register
// @route Post /employee/auth/regsiter
// @access_public
// console.log(crypto.randomBytes(64).toString('hex'));

export const resgisterFunc = async (req, res, next) => {
  const user = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  try {
    const data = await employeeModel.create(user);

    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (err) {
    console.log(err);

    if (err.code === 11000) {
      return res.status(400).json({
        msg: "username already exits",
      });
    }

    return res.status(500).json({
      success: false,
    });
  }
};

//@ desc post method to the employee login
// @route Post /employee/auth/login
// @access_public

export const loginFunc = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await employeeModel.findOne({ username: username });

  if (user === null || user === undefined) {
    return res.status(401).json({ msg: "user not found" });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = jsonwebtoken.sign(username, process.env.JWT_SECERT_KEY);

      employeeModel.update(
        { username: username },
        { status: true },
        (err, affected) => {
          if (affected) {
            console.log("status updated");
          }
        }
      );

      res.status(200).json({ auth_token: token, data: user });
    } else {
      res.status(203).json({ msg: "password or userName incorrect" });
    }
  });
};

//   try {
//     // // const si = await employeeModel.findOne({ username: username }).populate('employeeDetail');
//     // const d = await employeeModel.findById(user._id).populate('employeeDet')
//     // console.log(d)

//     const d = await employeeLocationModel
//       .find({
//         location: {
//           $nearSphere: {
//             $geometry: { type: "Point", coordinates: [75.69556, 8.7358] },
//             //    $minDistance: 10,
//             $maxDistance: 5000000,
//           },
//         },
//       })
//       .populate("employeeId");
//     console.log(d);

//     // console.log("ssdsfd" )
//   } catch (err) {
//     console.log(err);
//   }
