//operation = CRD
const clientsInfo = require("../Models/clients");

exports.createClientsInfoSchema = async (data) => {
  const result = await clientsInfo.create(data);
  return result;
};

exports.getClientsInfoSchema = async () => {
  const result = await clientsInfo.find();
  return result;
};
exports.updateClientsInfoSchema = async (data) => {
  const result = await clientsInfo.updateMany(data);
  return result;
};
