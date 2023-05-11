let bodyParser = require("body-parser");

let jsonParser = bodyParser.json();

module.exports = function (app) {
  // Restful APIs

  // Get data from database
  app.get("/api/person/:id", function (req, res) {
    res.json({
      firstname: "John",
      lastname: "Doe",
    });
  });

  // Save to database
  app.post("/api/person", jsonParser, function (req, res) {
    res.send("Thank you!");
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  });

  // Delete from the database
  app.delete("/api/person/:id", function (req, res) {});
};
