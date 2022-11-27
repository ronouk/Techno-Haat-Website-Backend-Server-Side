//operation = RU
const {
  createFooterInfoSchema,
  getFooterInfoSchema,
  updateFooterInfoSchema,
} = require("../Services/footer.service");

exports.createFooter = async (req, res, next) => {
  try {
    const result = await createFooterInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "footer Data inserted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "footer data couldn't insert an error occeured",
      error: error.message,
    });
  }
};
exports.getFooter = async (req, res, next) => {
  try {
    const result = await getFooterInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "footer Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "footer data get error",
      error: error.message,
    });
  }
};
exports.updateFooter = async (req, res, next) => {
  try {
    const result = await updateFooterInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "footer Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "footer couldn't update an error occurred",
      error: error.message,
    });
  }
};
