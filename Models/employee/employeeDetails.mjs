import mongoose from "mongoose";

const employeeDetailSchema = new mongoose.Schema({
  employeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employeeModel",
  },
  // _id: mongoose.Schema.Types.ObjectId,
  serviceName: {
    type: String,
    required: [true, "please enter the service name"],
    maxlength: 255,
  },
  minMember: {
    type: Number,
    required: [true, "please enter the minimum member in your service"],
    min: 3,
  },
  maxMember: {
    type: Number,
    required: [true, "please enter the maxmium member in your service"],
    max: 50,
  },
  workingHours: {
    type: Number,
    required: [true, "Enter the Working Hours"],
  },
  contactNumber: {
    type: [Number],
    required: [true, "please enter the contact Number"],
  },
  address: {
    type: String,
  },
});

const employeeDetail = new mongoose.model(
  "employeeDetail",
  employeeDetailSchema
);

export default employeeDetail;
