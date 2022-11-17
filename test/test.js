const fs = require("fs");

exports.createFile = (fileName) => {
  fs.writeFile(`${fileName}.js`, "this is test file", function (err) {
    if (err) throw err;
    console.log("File is created successfully");
  });
};

exports.createFolder = (folderPath) => {
  fs.mkdirSync(process.cwd() + folderPath, { recursive: true }, (error) => {
    if (error) {
      console.error("An error occured", error);
    } else {
      console.log("folder is created");
    }
  });
};
