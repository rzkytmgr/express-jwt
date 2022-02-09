const jwt = require("jsonwebtoken");

// token generator
const generateToken = (user) => {
  const options = {
    algorithm: "HS256",
    expiresIn: "1m",
  };

  const payload = {
    id: user._id,
    name: user.name,
    role: user.role,
  };

  return jwt.sign(payload, process.env.SECRET_KEY, options);
};

module.exports = generateToken;
