const express = require('express')
const app = express();
const mongoose = require("mongoose");
const path = require("path")
const session = require("express-session")
const bcrypt = require("bcrypt")

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
  res.render("home")
})

app.listen(5500, () => {

  console.log(` server running at port 5500`)
})