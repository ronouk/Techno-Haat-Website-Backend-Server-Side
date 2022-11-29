//operation = CRD
//projects list section
const projectsListInfo = require("../Models/projectsListInfo");

//projects content section
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

//projects list section
exports.createProjectsListInfoSchema = async (data) => {
  const result = await projectsListInfo.create(data);
  return result;
};

exports.getProjectsListInfoSchema = async () => {
  const result = await projectsListInfo.find();
  return result;
};
exports.updateProjectsListInfoSchema = async (data) => {
  const result = await projectsListInfo.updateMany(data);
  return result;
};
