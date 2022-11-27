//operation = RU
const {
  createNavInfoSchema,
  getNavInfoSchema,
  updateNavInfoSchema,
} = require("../Services/nav.service");

exports.createNav = async (req, res, next) => {
  try {
    const result = await createNavInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Navigation Data inserted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Navigation data couldn't insert an error occeured",
      error: error.message,
    });
  }
};

exports.getNav = async (req, res, next) => {
  try {
    const result = await getNavInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Nav Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Nav data get error",
      error: error.message,
    });
  }
};
exports.updateNav = async (req, res, next) => {
  try {
    const result = await updateNavInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Nav Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Nav couldn't update an error occurred",
      error: error.message,
    });
  }
};
