//operation = CRU
const {
  createTeamContentInfoSchema,
  getTeamContentInfoSchema,
  updateTeamContentInfoSchema,
  createTeamListInfoSchema,
  getTeamListInfoSchema,
  updateTeamListInfoSchema,
  updateTeamInfoSchema,
  getTeamInfoSchema,
  deleteTeamInfoSchema,
} = require("../Services/team.service");

//-----------------Team Content---------------------------
exports.createTeamContent = async (req, res, next) => {
  try {
    const result = await createTeamContentInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Team Content Data inserted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Team Content data couldn't insert an error occurred",
      error: error.message,
    });
  }
};
exports.getTeamContent = async (req, res, next) => {
  try {
    const result = await getTeamContentInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Team Content Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Team Content data get error",
      error: error.message,
    });
  }
};
exports.updateTeamContent = async (req, res, next) => {
  try {
    const result = await updateTeamContentInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Team Content Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Team Content couldn't update an error occurred",
      error: error.message,
    });
  }
};

//----------------------Team List---------------------------

exports.createTeamList = async (req, res, next) => {
  try {
    const result = await createTeamListInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Team List Data inserted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Team List data couldn't insert an error occurred",
      error: error.message,
    });
  }
};
exports.getTeamList = async (req, res, next) => {
  try {
    const result = await getTeamListInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Team List Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Can't get Team List Data an error occurred",
      error: error.message,
    });
  }
};
exports.updateTeamList = async (req, res, next) => {
  //servicelist update is not working properly have to work with body
  try {
    const result = await updateTeamListInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Team List Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Team List couldn't update an error occurred",
      error: error.message,
    });
  }
};

//unique team fetch
exports.getTeam = async (req, res, next) => {
  const teamId = req.params.id;
  try {
    const result = await getTeamInfoSchema(teamId);

    res.status(200).json({
      status: "success",
      message: "Team List Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Can't get Team List Data an error occurred",
      error: error.message,
    });
  }
};

exports.updateTeam = async (req, res, next) => {
  const teamId = req.params.id;
  const teamData = req.body;
  try {
    const result = await updateTeamInfoSchema(teamId, teamData);

    res.status(200).json({
      status: "success",
      message: "Team List Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Team List couldn't update an error occurred",
      error: error.message,
    });
  }
};

exports.deleteTeam = async (req, res, next) => {
  const teamId = req.params.id;
  try {
    const result = await deleteTeamInfoSchema(teamId);

    res.status(200).json({
      status: "success",
      message: "Team List Data is deleted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Can't deleted Team List Data an error occurred",
      error: error.message,
    });
  }
};
