let express = require("express");
let app = express();
let mysql = require("mysql");

var apiController = require("./controllers/apiController");
var htmlController = require("./controllers/htmlController");

let port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.use("/", function (req, res, next) {
  console.log("Request Url" + req.url);

  let con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "ab92WWak",
    database: "people",
  });
  con.query(
    "SELECT people.ID, Firstname, Lastname, address.Address FROM people INNER JOIN peopleaddresses ON people.id = peopleaddresses.personID INNER JOIN address ON address.id = peopleaddresses.AddressID",
    function (err, rows) {
      if (err) throw err;
      console.log(row[0].firstname);
    }
  );
  next();
});

apiController(app);
htmlController(app);

app.listen(port);
