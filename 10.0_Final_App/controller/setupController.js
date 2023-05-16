let Todos = require("../models/todoModel");

module.exports = function (app) {
  app.get("/api/setupTodos", function (req, res) {
    console.log("starting extract data");
    let starterTodos = [
      {
        username: "test",
        todo: "Do something",
        isDone: false,
        hasAttachment: false,
      },
      {
        username: "test",
        todo: "Feed dog",
        isDone: false,
        hasAttachment: false,
      },
      {
        username: "test",
        todo: "Learn Node",
        isDone: false,
        hasAttachment: false,
      },
    ];
    Todos.create(starterTodos)
      .then(function (results) {
        res.send(results);
      })
      .catch(function (err) {
        console.log(err);
      });
  });
};
