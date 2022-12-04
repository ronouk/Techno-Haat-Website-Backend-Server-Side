//operation = CRD
const ObjectId = require("mongodb").ObjectId;
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
  const result = await projectsListInfo.insertMany(data);
  return result;
};

exports.getProjectsListInfoSchema = async () => {
  const result = await projectsListInfo.find();
  return result;
};
/* exports.updateProjectsListInfoSchema = async (data) => {
  const result = await projectsListInfo.updateMany(data);
  return result;
}; */

//------------------Project list single section------------------
exports.getUniqueProjectInfoSchema = async (id) => {
  const query = { _id: ObjectId(id) };
  const result = await projectsListInfo.find(query);
  console.log(result);
  return result;
};
exports.updateUniqueProjectInfoSchema = async (id, updatedData) => {
  const query = { _id: ObjectId(id) };
  const result = await projectsListInfo.updateMany(query, updatedData);
  return result;
};

exports.deleteUniqueProjectInfoSchema = async (id) => {
  const query = { _id: ObjectId(id) };
  const result = await projectsListInfo.deleteOne(query);
  console.log(result);
  return result;
};
