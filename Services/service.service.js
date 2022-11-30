//operation = CRD

//projects content section
const serviceContentInfo = require("../Models/serviceContentInfo");

//projects list section
// const servicesListInfo = require("../Models/serviceinfo");

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

//projects list section
/* exports.createProjectsListInfoSchema = async (data) => {
  const result = await servicesListInfo.create(data);
  return result;
};

exports.getProjectsListInfoSchema = async () => {
  const result = await servicesListInfo.find();
  return result;
};
exports.updateProjectsListInfoSchema = async (data) => {
  const result = await servicesListInfo.updateMany(data);
  return result;
};
 */
