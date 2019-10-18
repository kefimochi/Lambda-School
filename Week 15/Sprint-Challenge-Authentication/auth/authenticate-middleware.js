const jwt = require("jsonwebtoken");
const secret = "idsfwgTARDISr37yehiwfe7rgfsdf73wupp999(^%$";

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).json(err);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({
      error: "No token provided, must be set on the Authorization Header"
    });
  }
};
