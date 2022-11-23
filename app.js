const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// thard party middleWare
app.use(cors());
app.use(express.json());

// route
const aboutRoute = require("./Routes/about.route");
const blogRoute = require("./Routes/blog.route");
const contactRoute = require("./Routes/contact.route");
const footerRoute = require("./Routes/footer.route");
const galleryRoute = require("./Routes/gallery.route");
const navRoute = require("./Routes/nav.route");
const homeBannerRoute = require("./Routes/homeBanner.route");
const projectsRoute = require("./Routes/projects.route");
const randomRoute = require("./Routes/random.route");
const serviceRoute = require("./Routes/service.route");
const teamRoute = require("./Routes/team.route");

app.use("/about", aboutRoute);
app.use("/blog", blogRoute);
app.use("/contact", contactRoute);
app.use("/footer", footerRoute);
app.use("/gallery", galleryRoute);
app.use("/navigation", navRoute);
app.use("/home/Banner", homeBannerRoute);
app.use("/projects", projectsRoute);
app.use("/random", randomRoute);
app.use("/service", serviceRoute);
app.use("/team", teamRoute);

app.get("/", (req, res) => {
  res.send(`<h1>Techno Haat server is connected and responding!!</h1>
  <br/>
  <p> We use the flowing approach for database operation on three routes in the "about" section get,post,put ► <a href="https://techno-haat-website-backend-server-side.vercel.app/about">Click here for get about data</a></p>
  `);
});

module.exports = app;
