const validateProjects = (req, res, next) => {
  if (!req.body) res.status(400).json({ message: "Missing project data" });
  else if (!req.body.name || !req.body.description)
    res
      .status(400)
      .json({ message: "Missing required name and/or description field" });
  else next();
};

module.exports = validateProjects;
