const Router = require("express").Router();
const veryfiMiddlewhare = require("../app/middlewhere/verify");
const upload = require("../app/middlewhere/upload");
const teamController = require("../app/controller/teamController");
Router.post("/add-team", upload.single("logo"), teamController.addATeam);
Router.get("/get-team", teamController.getTeam);
module.exports = Router;
