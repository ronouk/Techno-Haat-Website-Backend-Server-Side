const {
  createAboutInfoSchema,
  getAboutInfoSchema,
} = require("../Services/about.service");

//operation = RU
exports.createAboutInfoSchema = async (req, res, next) => {
  console.log(req.body);
  try {
    const result = await createAboutInfoSchema(req.body);

    req.status(200).json({
      status: "success",
      message: "Data inserted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "data couldn't insert an error occeured",
      error: error.message,
    });
  }
};
exports.getAbout = async (req, res, next) => {
  try {
    const result = await getAboutInfoSchema(req.body);

    req.status(200).json({
      status: "success",
      message: "Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "data get error",
      error: error.message,
    });
  }
};
exports.updateAbout = async (req, res, next) => {
  res.send("about Updated!!");
};
