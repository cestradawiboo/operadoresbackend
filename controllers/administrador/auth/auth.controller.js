const authFunctions = require("./functions/auth.functions");

exports.login = async (req, res) => {
  let result = await authFunctions.loginProcess(req.body);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  if (result.result === true) {
    return res.status(result.code).send(result.message);
  }
};
