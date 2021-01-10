import geocoder from "../Middlewares/geocoder.mjs";
import employeeLocationModel from "../Models/employee/employeeLocation.mjs";

export const employeeLocationRegister = async (req, res, next) => {
  const loc = await geocoder.geocode(req.address);

  const userId = req.user_id._id;

  console.log(loc);

  if (loc !== undefined) {
    const data = {
      employeeId: userId,
      location: {
        type: "Point",
        coordinates: [loc[0].longitude, loc[0].latitude],
      },
    };

    try {
      const employeeLocation = await employeeLocationModel.create(data);
      res.status(201).json({ data: employeeLocation });
    } catch (err) {
      console.log(err);
    }
  }
};
