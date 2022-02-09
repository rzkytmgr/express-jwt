const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const { authenticateToken } = require("../../middleware");
const { parseToken } = require("../../utils");

router.use(authenticateToken);

router.get("/info", (req, res, next) => {
  return res.status(200).json({
    code: 200,
    message: "Only amazing people can open this page!",
    route: req.path,
    data: jwt.decode(parseToken(req.headers.authorization)),
  });
});

router.get("/secret", (req, res, next) => {
  return res.status(200).json({
    code: 200,
    message: "Only amazing people can open this page!",
    route: req.path,
  });
});

router.get("/secret/:id", (req, res, next) => {
  return res.status(200).json({
    code: 200,
    message: "Only amazing people can open this page!",
    route: req.path,
  });
});

module.exports = router;
