//operation = RU
const {
  createClientsInfoSchema,
  getClientsInfoSchema,
  updateClientsInfoSchema,
} = require("../Services/clients.service");

exports.createClients = async (req, res, next) => {
  try {
    const result = await createClientsInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Clients Data inserted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Clients data couldn't insert an error occeured",
      error: error.message,
    });
  }
};
exports.getClients = async (req, res, next) => {
  try {
    const result = await getClientsInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Clients Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Clients data get error",
      error: error.message,
    });
  }
};
exports.updateClients = async (req, res, next) => {
  try {
    const result = await updateClientsInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Clients Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Clients couldn't update an error occurred",
      error: error.message,
    });
  }
};
