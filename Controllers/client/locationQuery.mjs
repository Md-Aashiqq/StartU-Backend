import employeeLocationModel from "../../Models/employee/employeeLocation.mjs";

//@ desc post method to get the employee detail by location and minKm
// @route Post /employee/employeeSearch
// @access_private

export const locationQueryFunc = async (req, res, next) => {
  const location = req.body.location;
  const km = req.body.km;

  try {
    const d = await employeeLocationModel
      .find({
        location: {
          $nearSphere: {
            $geometry: { type: "Point", coordinates: location },
            //    $minDistance: 10,
            $maxDistance: km * 1000,
          },
        },
      })
      .populate("employeeId");

    console.log(d);

    res.status(200).json({ msg: "Success", count: d.length, data: d });
  } catch (err) {
    console.log(err);
  }
};
