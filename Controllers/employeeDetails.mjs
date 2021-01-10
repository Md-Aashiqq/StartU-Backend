import mongoose from "mongoose";
import employeeDetail from "../Models/employee/employeeDetails.mjs";

export const employeeDetailRegister = async (req, res, next) => {
  const details = req.body;

  details.employeId = req.user._id;
  console.log(details);
  try {
    const employeeDetails = await employeeDetail.create(details);
    req.address = employeeDetails.address;
    req.user_id = employeeDetails._id;
    next();
    // res.status(201).json({sucess:true,msg:'details added succesfully',data:employeeDetails})
  } catch (err) {
    console.log(err);
  }

  // res.status(200).json({data:req.user})
};
