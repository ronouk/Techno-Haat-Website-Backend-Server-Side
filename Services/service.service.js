//operation = CRD

//Service content section
const serviceContentInfo = require("../Models/serviceContentInfo");
const servicesListInfo = require("../Models/serviceListInfo");

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

//-------------------Service list section-------------------
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
