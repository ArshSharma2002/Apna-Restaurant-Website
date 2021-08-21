const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const fs = require("fs");
const hbs = require("hbs");
const port = 80;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "./partials"));

mongoose.connect("mongodb://localhost:27017/ApnaRestaurant", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
});

// creating schema and model for table booking
const tableSchema = new mongoose.Schema({
  name: String,
  contact: Number,
  persons: String,
  date: Date,
  timing: String,
  address: String,
});

const table = mongoose.model("table", tableSchema);

// creating schema and model for order
const orderSchema = new mongoose.Schema({
  name: String,
  mail: String,
  contact: Number,
  payment: String,
  order: String,
  address: String,
});

const order = mongoose.model("order", orderSchema);

app.use("/static", express.static(path.join(__dirname, "./static")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/tableBooking", (req, res) => {
  res.render("tableBooking");
});

app.post("/tablebooking", (req, res) => {
  var myTable = new table(req.body);
  myTable
    .save()
    .then(() => {
      console.log(myTable);
      res.status(400).send("your responses has been saved.");
    })
    .catch(() => {
      res.send("OOPS! an error occurred. Try again.");
    });
});

app.get("/menu", (req, res) => {
  res.render("menu");
});

app.get("/order", (req, res) => {
  res.render("order");
});

app.post("/order", (req, res) => {
  var myOrder = new order(req.body);
  myOrder
  .save()
  .then(() => {
      console.log(myOrder,"is booked successfully")
      res.status(200).send("your order is booked :)")
    })
    .catch(() => {
        res.send("OOPS! an error occurred. Try again.");
    });
});

app.get("/policies", (req, res) => {
  res.render("policies");
});

app.listen(port, () => {
  console.log(`successfully running at port ${port}`);
});
