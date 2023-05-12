let express = require("express");
let app = express();
let mongoose = require("mongoose");

mongoose
  .connect
  // mongodb link goes here
  ();

let Schema = mongoose.Schema;
// Define structure of documents
let personSchema = new Schema({
  firstname: String,
  lastname: String,
  address: String,
});
// Create a function to generate object
let Person = mongoose.model("Person", personSchema);

// Create object
let john = Person({
  firstname: "John",
  lastname: "Doe",
  address: "555 Main St.",
});

john.save(function (err) {
  if (err) throw err;
  console.log("Person saved!");
});

let jane = Person({
  firstname: "Jane",
  lastname: "Doe",
  address: "555 Main St.",
});

jane.save(function (err) {
  if (err) throw err;
  console.log("Person saved!");
});

var apiController = require("./controllers/apiController");
var htmlController = require("./controllers/htmlController");

let port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.use("/", function (req, res, next) {
  console.log("Request Url" + req.url);
  Person.find({}, function (err, users) {
    if (err) throw err;
    console.log(users);
  });
  next();
});

apiController(app);
htmlController(app);

app.listen(port);
