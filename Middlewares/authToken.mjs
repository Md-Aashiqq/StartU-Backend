import mongoose from "mongoose";

import jsonwebtoken from "jsonwebtoken";

import employeeModel from "../Models/employeeModel.mjs"


export const authToken = async (req, res, next) => {
    
    const token = req.header('auth_Token');

    if (token === null || token === undefined) return res.status(401).json({ msg: 'please provided the token' })
    console.log(token)
    try {
        const decode = jsonwebtoken.verify(token, process.env.JWT_SECERT_KEY);

        if (!decode) {
            return res.status(400).json({ msg: 'Invaild Token' });
        } else {
            console.log(decode)

            const user = await employeeModel.findOne({ username: decode })
            
            req.user = user

            next();
        }

    } catch (err) {
        console.log(err)
    }
    
}