export const bookEventFunc = (req, res, next) => {
  const clientId = req.user._id;

  res.status(200).json({ msg: clientId });
};
