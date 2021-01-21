import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "clientModel",
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventTime: {
    type: Date,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employeeDetail",
  },
  member: {
    type: Number,
  },
  workingHours: {
    type: Number,
  },
  dish: {
    tpye: [Object],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const eventModel = mongoose.model("eventModel", eventSchema);

export default eventModel;
