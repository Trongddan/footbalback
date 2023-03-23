const jwt = require("jsonwebtoken");
const veryfiMiddlewhare = {
  veryfi: (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, "dankenvil", (err, user) => {
        if (err) {
          return res.status(403).json({ mess: "you're not permission" });
        }
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json({ mess: "You're not allowed" });
    }
  },
  verifyAdmin: (req, res, next) => {
    veryfiMiddlewhare.veryfi(req, res, () => {
      if (req.user.isAdmin === true || req.user.id === req.params.id) {
        next();
      } else {
        return res.status(403).json({ mess: "you're not permission" });
      }
    });
  },
};
module.exports = veryfiMiddlewhare;
