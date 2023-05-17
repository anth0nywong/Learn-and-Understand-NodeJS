let express = require("express");
let app = express();
let mongoose = require("mongoose");
let config = require("./config");
let setupController = require("./controller/setupController");
let apiController = require("./controller/apiController");

let port = process.env.PORT || 3000;

app.use("/", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

// Single connection for any other querys
mongoose.connect(config.getDbConnectionString());

setupController(app);
apiController(app);

app.listen(port);
