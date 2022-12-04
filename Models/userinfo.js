const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");
const bcryptjs = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      validator: [validator.isEmail, "provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email address is required"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 6,
          }),
        message: "Password {VALUE} is not strong",
      },
    },
    confirmPassword: {
      type: String,
      required: [true, "please Confirm your password"],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Password isn't match",
      },
    },
    role: {
      type: String,
      required: [true, "please provide user role"],
    },
    firstName: {
      type: String,
      required: [true, "please provide your first name"],
      // unique: [true, "name must be unique"],
      minLength: [3, "Name must be at list 3 characters"],
      maxLength: [100, "Name is to long"],
    },
    lastName: {
      type: String,
      required: [false, "please provide your Last name"],
      unique: [true, "Name must be unique"],
      minLength: [3, "Name must be at list 3 characters"],
      maxLength: [100, "Name is to long"],
    },

    contactNumber: {
      type: Number,
      // validate: [validator.isMobilePhone, "Please provide a phone number"],
    },
    imgURL: {
      type: String,
      validate: [validator.isURL, "pls provide a valid url"],
    },
    status: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "active",
    },
    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },

  { timestamps: true }
);

// password hashing
userSchema.pre("save", function (next) {
  const password = this.password;
  const hashedPassword = bcryptjs.hashSync(password);
  this.password = hashedPassword;
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcryptjs.compareSync(password, hash);
  return isPasswordValid;
};

const user = mongoose.model("user", userSchema);
module.exports = user;

/* {
    "email": "mh.foysal.h@gmail.com",
    "password": "Faisal<123",
    "confirmPassword": "Faisal<123",
    "role": "admin",
    "firstName": "foysal",
    "status": "active"
  } */
