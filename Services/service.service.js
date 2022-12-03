//operation = CRD

//Service content section
const serviceContentInfo = require("../Models/serviceContentInfo");
const servicesListInfo = require("../Models/serviceListInfo");
const ObjectId = require("mongodb").ObjectId;

exports.createServicesContentInfoSchema = async (data) => {
  const result = await serviceContentInfo.create(data);
  return result;
};

exports.getServicesContentInfoSchema = async () => {
  const result = await serviceContentInfo.find();
  return result;
};
exports.updateServicesContentInfoSchema = async (data) => {
  const result = await serviceContentInfo.updateMany(data);
  return result;
};

//-------------------Service list all section-------------------
exports.createServiceListInfoSchema = async (data) => {
  const result = await servicesListInfo.create(data);
  return result;
};

exports.getServiceListInfoSchema = async () => {
  const result = await servicesListInfo.find();
  return result;
};
exports.updateServiceListInfoSchema = async (data) => {
  const result = await servicesListInfo.updateMany(data);
  return result;
};

//------------------Service list single section------------------
exports.getUniqueServiceInfoSchema = async (id) => {
  const query = { _id: ObjectId(id) };
  const result = await servicesListInfo.find(query);
  return result;
};
exports.updateUniqueServiceInfoSchema = async (id, updatedData) => {
  const query = { _id: ObjectId(id) };
  // const find = await servicesListInfo.find(query);
  const result = await servicesListInfo.updateMany(query, updatedData);
  return result;
};
