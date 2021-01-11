import mongoose from "mongoose";

const foodModelSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employeeDetail",
  },
  rice: {
    type: [String],
  },
  sambar: {
    type: [String],
  },
  rasam: {
    type: [String],
  },
  curry: {
    type: [String],
  },
  stirFry: {
    type: [String],
  },
  stew: {
    type: [String],
  },
  chicken: {
    type: [String],
  },
  mutton: {
    type: [String],
  },
  seaFood: {
    type: [String],
  },
  egg: {
    type: [String],
  },
  sweets: {
    type: [String],
  },
});

const employeeFoodModel = new mongoose.model(
  "employeeFoodModel",
  foodModelSchema
);

export default employeeFoodModel;
