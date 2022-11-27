//operation = CRUD
//operation = CRD
const projectsContentInfo = require("../Models/projectsContentInfo");

exports.createProjectsContentInfoSchema = async (data) => {
  const result = await projectsContentInfo.create(data);
  return result;
};

exports.getProjectsContentInfoSchema = async () => {
  const result = await projectsContentInfo.find();
  return result;
};
exports.updateProjectsContentInfoSchema = async (data) => {
  const result = await projectsContentInfo.updateMany(data);
  return result;
};
