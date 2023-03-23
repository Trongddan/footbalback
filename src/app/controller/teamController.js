const Team = require("../model/Team");
const TeamController = {
  addATeam: async (req, res) => {
    try {
      const newTeam = await new Team(req.body);
      if (req.file) {
        newTeam.logo = req.file.path.substr(4);
      }
      await newTeam.save();
      res.status(200).json({ mess: "add Team successfully" });
    } catch (error) {
      res.status(500).json({ mess: "add Team unsuccessfully" });
    }
  },
  getTeam: async (req, res) => {
    try {
      const teamFound = await Team.find();
      res.status(200).json(teamFound);
    } catch (error) {
      res.status(500).json({ mess: "something is wrong!" });
    }
  },
};
module.exports = TeamController;
