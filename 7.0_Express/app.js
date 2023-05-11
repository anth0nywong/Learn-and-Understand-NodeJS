let express = require("express");
let app = express();

var apiController = require("./controllers/apiController");
var htmlController = require("./controllers/htmlController");

let port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

// Try body parser for getting post data

// app.post("/person", urlencodedParser, function (req, res) {
//   res.send("Thank you!");
//   console.log(req.body.firstname);
//   console.log(req.body.lastname);
// });

// app.post("/personjson", jsonParser, function (req, res) {
//   res.send("Thank you for json data!");
//   console.log(req.body.firstname);
//   console.log(req.body.lastname);
// });

apiController(app);
htmlController(app);

app.listen(port);
