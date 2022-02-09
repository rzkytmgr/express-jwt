const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("[Middleware] You will see me, if someone request to `Home` route!");
  next();
});

router.get("/", (req, res, next) => {
  return res.status(200).json({
    code: 200,
    message: "This is public page, all people can open this page!",
    route: req.path,
  });
});

router.get("/profile", (req, res, next) => {
  return res.status(200).json({
    code: 200,
    message: "This is public page, all people can open this page!",
    route: req.path,
  });
});

router.get("/profile/:id", (req, res, next) => {
  return res.status(200).json({
    code: 200,
    message: "This is also public page, all people also can open this page!",
    route: req.path,
  });
});

router.get("*", (req, res, next) => {
  res.status(404).json({
    code: 404,
    message: "You've lost, we can not find you!",
    route: req.path,
  });
});

module.exports = router;
