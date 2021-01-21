import employeeFoodModel from "../Models/employee/employeeFood.mjs";
import employeeDetail from "../Models/employee/employeeDetails.mjs";

export const foodRegisterFunc = async (req, res, next) => {
  const userId = req.user._id;
  const foods = req.body.foods;

  foods.employeeId = userId;
  try {
    const data = await employeeFoodModel.create(foods);

    const id = data._id;

    const da = await employeeDetail.update(
      { employeId: userId },
      {
        employeeFoodId: data._id,
      }
    );

    res
      .status(201)
      .json({ sucess: true, msg: "Sucesss", data: data, da: da, id: userId });
  } catch (err) {
    console.log(err);
    res.status(501).json({ msg: "failed" });
  }

};
