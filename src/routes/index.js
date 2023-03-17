const userRouter = require("./userRoute");
const route = (app) => {
  app.use("/user", userRouter);
};
module.exports = route;
