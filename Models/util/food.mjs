import mongoose from "mongoose";

const foodsSchema = mongoose.Schema({
  rice: {
    type: [Object],
  },
  sambar: {
    type: [Object],
  },
  rasam: {
    type: [Object],
  },
  curry: {
    type: [Object],
  },
  stirFry: {
    type: [Object],
  },
  stew: {
    type: [Object],
  },
  chicken: {
    type: [Object],
  },
  mutton: {
    type: [Object],
  },
  seaFood: {
    type: [Object],
  },
  egg: {
    type: [Object],
  },
  sweets: {
    type: [Object],
  },
});

const foodModel = new mongoose.model("foodModel", foodsSchema);

export default foodModel;

// This code for insert the food in DataBase

// const foods = await foodModel.create(food);
// console.log(foods);
