const Router = require("express").Router();
const userController = require("../app/controller/userController");
Router.post("/register", userController.register);
Router.post("/login", userController.login);
module.exports = Router;
