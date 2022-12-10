const { signupService, loginService } = require("../Services/user.service");
const bcryptjs = require("bcryptjs");
const { generateToken } = require("../utils/token");

exports.signup = async (req, res) => {
  try {
    const result = await signupService(req.body);
    res.status(200).json({
      status: "success",
      message: "User insert successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "User couldn't insert",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        error: error.message,
      });
    }

    const result = await loginService(email);

    if (!result) {
      return res.status(400).json({
        status: "error",
        error: "No user found please create an account",
      });
    }

    const isPasswordValid = result.comparePassword(password, result.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        status: "error",
        error: "Password is not correct",
      });
    }
    if (result.status != "active") {
      return res.status(400).json({
        status: "error",
        error: "Account not active",
      });
    }

    const token = generateToken(result);
    const { password: pwd, ...others } = result.toObject();

    res.status(200).json({
      status: "success",
      message: "Welcome!!",
      data: { token },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Login Error pls Check The Data",
      error: error.message,
    });
  }
};

exports.getMe = async (req, res, next) => {
  try {
    //   res.json(req.user);
    const result = await loginService(req.user?.email);
    console.log(result.email === req.user?.email);
    if (req.user?.email === result.email) {
      let data = {
        email: result.email,
        role: result.role,
        firstName: result.firstName,
        status: result.result,
      };
      res.status(200).json({
        status: "success",

        data: data,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Get User Data couldn't insert",
      error: error.message,
    });
  }
};
