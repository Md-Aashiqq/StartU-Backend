import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import clientModel from "../../Models/client/clientModel.mjs";

//@ desc post method to the cleint register
// @route Post /client/auth/register
// @access_public
export const regiterFunc = async (req, res) => {
  const user = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  try {
    const data = await clientModel.create(user);

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

//@ desc post method to the cleint  login
// @route Post /client/auth/login
// @access_public

export const loginFunc = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await clientModel.findOne({ username: username });

  if (user === null || user === undefined) {
    return res.status(401).json({ msg: "user not found" });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = jsonwebtoken.sign(username, process.env.JWT_SECERT_KEY);

      clientModel.update(
        { username: username },
        { status: true },
        (err, affected) => {
          if (affected) {
            console.log("status updated");

            user.status = true;
          }
        }
      );

      res.status(200).json({ auth_token: token, data: user });
    } else {
      res.status(203).json({ msg: "password or userName incorrect" });
    }
  });
};
