//operation = CRD
const expectationInfo = require("../Models/expectationinfo");

exports.createExpectationInfoSchema = async (data) => {
  const result = await expectationInfo.create(data);
  return result;
};

exports.getExpectationInfoSchema = async () => {
  const result = await expectationInfo.find();
  return result;
};
exports.updateExpectationInfoSchema = async (data) => {
  const result = await expectationInfo.updateMany(data);
  return result;
};
