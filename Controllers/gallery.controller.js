//operation = CRUD

const {
  createGalleryInfoSchema,
  getGalleryInfoSchema,
  updateGalleryInfoSchema,
  deleteGalleryInfoSchema,
} = require("../Services/gallery.service");

exports.createGallery = async (req, res, next) => {
  try {
    const result = await createGalleryInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Gallery Data inserted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Gallery data couldn't insert an error occeured",
      error: error.message,
    });
  }
};

exports.getGallery = async (req, res, next) => {
  try {
    const result = await getGalleryInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Gallery Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Gallery data get error",
      error: error.message,
    });
  }
};

exports.updateGallery = async (req, res, next) => {
  try {
    const result = await updateGalleryInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Gallery Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Gallery couldn't update an error occurred",
      error: error.message,
    });
  }
};
exports.deleteGallery = async (req, res, next) => {
  res.send("delete Success!!");
};
