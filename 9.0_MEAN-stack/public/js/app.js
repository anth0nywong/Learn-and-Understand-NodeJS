// Inside array, add dependencies of angular module
angular.module("TestApp", []);

angular.module("TestApp").controller("MainController", ctrlFunc);

function ctrlFunc() {
  // this.message = "Hello";

  this.people = clientPeople;
}
