const opDb = require("../../models/operadoresDB");
const Sequelize = require("sequelize");

const saveError = async (fun, input, err) => {
  try {
    await opDb.models.systemErrors.create({
      function: fun,
      inputData: input,
      errorMessage: err,
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  saveError,
};
