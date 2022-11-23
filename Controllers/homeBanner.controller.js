//operation = CRU
//frontend component name HomeBanner
const {
  createHomeBannerInfoSchema,
  getHomeBannerInfoSchema,
  updateHomeBannerInfoSchema,
} = require("../Services/homeBanner.service");
exports.createHomeBannerInfo = async (req, res) => {
  console.log(req.body, "from controller");
  try {
    const result = await createHomeBannerInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Home Banner Data inserted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Home Banner data couldn't insert an error occeured",
      error: error.message,
    });
  }
};

exports.getHomeBanner = async (req, res, next) => {
  try {
    const result = await getHomeBannerInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Home Banner Data get Successfully",
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

exports.updateHomeBanner = async (req, res, next) => {
  try {
    const result = await updateHomeBannerInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Home Banner Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "data couldn't update an error occurred",
      error: error.message,
    });
  }
};
