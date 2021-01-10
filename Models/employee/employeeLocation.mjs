import mongoose from "mongoose";

const employeeLoactionSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employeeDetail",
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
  },
});

employeeLoactionSchema.index({ location: "2dsphere" });

const employeeLocationModel = new mongoose.model(
  "employeeLocationModel",
  employeeLoactionSchema
);

export default employeeLocationModel;
