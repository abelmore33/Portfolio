const Users = require("./users-model");

function validateUserEmail(req, res, next) {
  const { email } = req.body;
  if (!email) {
    next({ status: 400, message: "Email is required" });
  } else {
    next();
  }
}

const validateUserInput = (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({ message: "All fields are required" });
  } else {
    next();
  }
};

module.exports = {
  validateUserEmail,
  validateUserInput,
};
