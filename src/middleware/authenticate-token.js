const jwt = require("jsonwebtoken");
const { parseToken } = require("../utils");

const authenticateToken = (req, res, next) => {
  const token = parseToken(req.headers["authorization"]);

  if (!token)
    return res.status(401).json({
      code: 401,
      message: "Unauthorized",
    });

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    console.log(err);
    if (err)
      return res.status(403).json({
        code: 403,
        message: "Forbidden",
      });
  });

  next();
};

module.exports = authenticateToken;
