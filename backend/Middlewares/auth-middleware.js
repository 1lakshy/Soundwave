module.exports = async function (req, res, next) {
  try {
    const { accesstoken } = req.cookies;

    if (!accesstoken) {
      throw new Error();
    }
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid Token" });
  }
};
