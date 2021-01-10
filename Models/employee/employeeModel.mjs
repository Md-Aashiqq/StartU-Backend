import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    required: [true, "Please Enter the UserName"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provied password"],
    maxlength: 255,
  },
  status: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    maxlength: 255,
    required: [true, "Please Provided the Email"],
  },
  isRegister: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  employeeDetail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employeeDetail",
  },
});

const employeeModel = new mongoose.model("employeeModel", employeeSchema);

export default employeeModel;
