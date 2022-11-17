//operation = CRUD
exports.getProjects = async (req, res, next) => {
  res.send("projects get success");
};
exports.createProjects = async (req, res, next) => {
  res.send("projects created ++");
};
exports.updateProjects = async (req, res, next) => {
  res.send("projects Updated!!");
};
exports.deleteProjects = async (req, res, next) => {
  res.send("projects deleted!!");
};
