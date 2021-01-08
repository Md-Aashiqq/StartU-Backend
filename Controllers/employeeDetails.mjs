import mongoose from "mongoose";


export const employeeDetailRegister = async (req, res, next) => {
    

        res.status(200).json({data:req.user})

}