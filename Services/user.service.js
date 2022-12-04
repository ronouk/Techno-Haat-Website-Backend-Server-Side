const user = require("../Models/userinfo");

exports.signupService = async (userInfo) => {
  const result = await user.create(userInfo);
  return result;
};

exports.loginService = async (email) => {
  const result = await user.findOne({ email });
  return result;
};
