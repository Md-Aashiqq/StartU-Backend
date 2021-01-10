import mongoose from "mongoose";

const clientModelSchema = new mongoose.Schema({
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
});

const clientModel = new mongoose.model("clientModel", clientModelSchema);

export default clientModel;
