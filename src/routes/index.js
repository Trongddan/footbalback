const userRouter = require("./userRoute");
const teamRouter = require('./teamRouter')
const route = (app) => {
  app.use("/user", userRouter);
  app.use('/team',teamRouter)
};
module.exports = route;
