const Router = require("express").Router();
const veryfiMiddlewhare = require("../app/middlewhere/verify");
const userController = require("../app/controller/userController");
Router.post("/register", userController.register);
Router.post("/login", userController.login);
Router.get("/get-player", userController.getAllPlayer);
module.exports = Router;
