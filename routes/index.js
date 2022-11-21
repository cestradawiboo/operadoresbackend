/* Route Files */
const urlApi = require("../config/routes/urlbase");
const cuestionarioRoutes = require("./cuestionario/cuestionario.routes");
const authAdminRoutes = require("./administrador/auth/auth.routes");
/* Route Files */

const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express || Operadores.com" });
});

router.use(`${urlApi.api_url_base}/interview`, cuestionarioRoutes);
router.use(`${urlApi.api_url_base}/admin`, authAdminRoutes);

module.exports = router;
