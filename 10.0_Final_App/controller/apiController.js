const { model } = require("mongoose");
let Todos = require("../models/todoModel");
let bodyParser = require("body-parser");

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/api/todos/:uname", function (req, res) {
    Todos.find({ username: req.params.uname })
      .then(function (todos) {
        res.send(todos);
      })
      .catch(function (err) {
        console.log(err);
      });
  });
  app.get("/api/todo/:id", function (req, res) {
    Todos.findById({ _id: req.params.id })
      .then(function (todo) {
        res.send(todo);
      })
      .catch(function (err) {
        console.log(err);
      });
  });

  app.post("/api/todo", function (req, res) {
    if (req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, {
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      })
        .then(function () {
          res.send("Success");
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
      let newTodo = Todos({
        username: "test",
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      });
      newTodo
        .save()
        .then(function () {
          res.send("Success");
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  });
  app.delete("/api/todo", function (req, res) {
    Todos.findByIdAndRemove(req.body.id)
      .then(function () {
        res.send("Success");
      })
      .catch(function (err) {
        console.log(err);
      });
  });
};
