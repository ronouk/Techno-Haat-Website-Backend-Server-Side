//operation = CRD

//---------------------Team content section---------------------
const teamContentInfo = require("../Models/teamContentInfo");
const teamsListInfo = require("../Models/teamListInfo");

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
