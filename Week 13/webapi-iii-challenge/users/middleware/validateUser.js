const validateUser = (req, res, next) => {
  if (!req.body) res.status(400).json({ message: "Missing user data" });
  else if (!req.body.name)
    res.status(400).json({ message: "Missing required name field" });
  else next();
};

module.exports = validateUser;
