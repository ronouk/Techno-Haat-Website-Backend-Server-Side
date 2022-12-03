//operation = CRD

//---------------------Team content section---------------------
const teamContentInfo = require("../Models/teamContentInfo");
const teamsListInfo = require("../Models/teamListInfo");
const ObjectId = require("mongodb").ObjectId;

exports.createTeamContentInfoSchema = async (data) => {
  const result = await teamContentInfo.insertMany(data);
  return result;
};

exports.getTeamContentInfoSchema = async () => {
  const result = await teamContentInfo.find();
  return result;
};
exports.updateTeamContentInfoSchema = async (data) => {
  const result = await teamContentInfo.updateMany(data);
  return result;
};

//-------------------Team list section-------------------
exports.createTeamListInfoSchema = async (data) => {
  const result = await teamsListInfo.create(data);
  return result;
};

exports.getTeamListInfoSchema = async () => {
  const result = await teamsListInfo.find();
  return result;
};
exports.updateTeamListInfoSchema = async (data) => {
  const result = await teamsListInfo.updateMany(data);
  return result;
};

//-------------------Unique Team section-------------------
exports.getTeamInfoSchema = async (id) => {
  const query = { _id: ObjectId(id) };
  const result = await teamsListInfo.find(query);
  return result;
};

exports.updateTeamInfoSchema = async (id, updatedData) => {
  const query = { _id: ObjectId(id) };
  const result = await teamsListInfo.updateMany(query, updatedData);
  return result;
};
