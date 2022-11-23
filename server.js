const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

//database connection
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log(
    `Techno Haat Backend is connected with database successfully`.cyan.bold
  );
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Techno Haat Backend app listening on port ${port} http://localhost:${port}/ `
  );
});
