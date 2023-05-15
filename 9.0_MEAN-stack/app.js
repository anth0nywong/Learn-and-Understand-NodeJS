let express = require("express");
let app = express();

let port = process.env.PORT || 3000;

let people = [{ name: "John Doe" }, { name: "Jane Doe" }, { name: "Jim Doe" }];

app.set("view engine", "ejs");
app.use("/assets", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("index", { serverPeople: people });
});

app.listen(port);
