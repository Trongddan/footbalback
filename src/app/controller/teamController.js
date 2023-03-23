const Team = require("../model/Team");
const TeamController = {
  addATeam: async (req, res) => {
    try {
      const newTeam = await new Team(req.body);
      await newTeam.save();
      res.status(200).json({ mess: "add Team successfully" });
    } catch (error) {
      res.status(500).json({ mess: "add Team unsuccessfully" });
    }
  },
};
module.exports = TeamController