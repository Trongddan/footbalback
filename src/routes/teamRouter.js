const Router = require("express").Router();
const veryfiMiddlewhare = require("../app/middlewhere/verify");
const teamController = require("../app/controller/teamController");
Router.post("/add-team", teamController.addATeam);
module.exports = Router;
