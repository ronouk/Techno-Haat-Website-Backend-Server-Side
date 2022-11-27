//operation = CRU
const {
  createProjectsContentInfoSchema,
  getProjectsContentInfoSchema,
  updateProjectsContentInfoSchema,
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
      message: "projects Content data couldn't insert an error occeured",
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

//project List
exports.createProjectsList = async (req, res, next) => {
  res.send("projects List created ++");
};
exports.getProjectsList = async (req, res, next) => {
  res.send("projects List get success");
};
exports.updateProjectsList = async (req, res, next) => {
  res.send("projects List Updated!!");
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
