const authController = require("../../../controllers/administrador/auth/auth.controller");
const router = require("express").Router();

router.route("/login").post(authController.login);

module.exports = router;
