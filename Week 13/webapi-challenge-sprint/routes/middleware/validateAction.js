const validateProjectId = require("./validateProjectId");

const validateAction = (req, res, next) => {
  if (!req.body) res.status(400).json({ message: "Missing project data" });
  else if (!req.body.project_id) {
    res.status(400).json({ message: "Missing required project_id field" });
    validateProjectId(req, res, null);
  } else if (!req.body.description) {
    res.status(400).json({ message: "Missing required description field" });
  } else if (req.body.description.length > 128)
    res.status(400).json({
      message: "The description length is too long, up to 128 characters only"
    });
  else if (!req.body.notes)
    res.status(400).json({ message: "Missing required notes field" });
  else next();
};

module.exports = validateAction;
