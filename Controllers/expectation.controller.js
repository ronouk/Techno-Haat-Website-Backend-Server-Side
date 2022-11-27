//operation = CRUD

const {
  createExpectationInfoSchema,
  getExpectationInfoSchema,
  updateExpectationInfoSchema,
} = require("../Services/expectation.service");

exports.createExpectation = async (req, res, next) => {
  try {
    const result = await createExpectationInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Expectation Data inserted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Expectation data couldn't insert an error occeured",
      error: error.message,
    });
  }
};

exports.getExpectation = async (req, res, next) => {
  try {
    const result = await getExpectationInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Expectation Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Expectation data get error",
      error: error.message,
    });
  }
};

exports.updateExpectation = async (req, res, next) => {
  try {
    const result = await updateExpectationInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Expectation Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Expectation couldn't update an error occurred",
      error: error.message,
    });
  }
};
