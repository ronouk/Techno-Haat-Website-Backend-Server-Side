const mongoose = require("mongoose");
const app = require("./app");
const file = require("./test/test");
const port = 5000;

const folders = ["test1", "test2", "test3", "test4"];

for (const folder of folders) {
  file.createFolder(`/test/${folder}`);
}

// file.createFolder("/test/test1");
const createRoutes = ["nav", "navBanner", "blog"];

/* for (const route of createRoutes) {
  file.createFile(route);
} */

app.listen(port, () => {
  console.log(
    `Techno Haat Backend app listening on port ${port} http://localhost:${port}/ `
  );
});
