//operation = CRU
const {
  createProjectsContentInfoSchema,
  getProjectsContentInfoSchema,
  updateProjectsContentInfoSchema,
  createProjectsListInfoSchema,
  getProjectsListInfoSchema,
  updateProjectsListInfoSchema,
} = require("../Services/projects.service");

//project Content
exports.createProjectsContent = async (req, res, next) => {
  try {
    const result = await createProjectsContentInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "projects Content Data inserted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "projects Content data couldn't insert an error occurred",
      error: error.message,
    });
  }
};
exports.getProjectsContent = async (req, res, next) => {
  try {
    const result = await getProjectsContentInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "projects Content Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "projects Content data get error",
      error: error.message,
    });
  }
};
exports.updateProjectsContent = async (req, res, next) => {
  try {
    const result = await updateProjectsContentInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "projects Content Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "projects Content couldn't update an error occurred",
      error: error.message,
    });
  }
};

//----------------------project List---------------------------

exports.createProjectsList = async (req, res, next) => {
  try {
    const result = await createProjectsListInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "projects List Data inserted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "projects List data couldn't insert an error occurred",
      error: error.message,
    });
  }
};
exports.getProjectsList = async (req, res, next) => {
  try {
    const result = await getProjectsListInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Projects List Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Can't get projects List Data an error occurred",
      error: error.message,
    });
  }
};
exports.updateProjectsList = async (req, res, next) => {
  try {
    const result = await updateProjectsListInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "projects List Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "projects List couldn't update an error occurred",
      error: error.message,
    });
  }
};

/* //unique project from list
exports.getUniqueProject = async (req,res,next)=>{
  res.send("unique project success");
}

exports.updateUniqueProject = async (req,res,next)=>{
  res.send("unique project Updated!!");
}

exports.deleteUniqueProject = async (req,res,next)=>{
  res.send("unique project deleted!!");
} */
