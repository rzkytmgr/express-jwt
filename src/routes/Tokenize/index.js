const express = require("express");
const { generateToken } = require("../../utils");
const router = express.Router();

router.use((req, res, next) => {
  console.log("[Middleware] You will see me, if you want to `generate` token!");
  next();
});

router.post("/generate", (req, res, next) => {
  if (req.body.id === null || req.body.name === null || req.body.role === null)
    return res.status(406).json({
      code: 406,
      message: "You must declare `id`, `name`, and `role` in your body request",
    });

  const token = generateToken({
    _id: req.body.id,
    name: req.body.name,
    role: req.body.role,
  });

  return res.status(200).json({
    code: 200,
    message: "Here your crown KING!",
    token,
  });
});

module.exports = router;
