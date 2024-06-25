const express = require("express");
const router = express.Router();
const auhtMiddlewares = require("../middlewares/auth.middlewares");

const controller = require("../controllers/users.controller");

router.post("/register", controller.register);

router.post("/login", controller.login);

router.post("/password/forgot", controller.forgotPassword);

router.post("/password/opt", controller.otpPassword);

router.post("/password/reset", controller.resetPassword);

router.get("/detail",auhtMiddlewares.requireAuth, controller.detail);

router.get("/list", auhtMiddlewares.requireAuth, controller.list);

module.exports = router;
