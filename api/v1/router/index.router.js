const taskRouter = require("./task.router");
const userRouter = require("./users.router");

module.exports = (app) => {
  const version = "/api/v1";

  app.use(version + "/tasks", taskRouter);

  app.use(version + "/users", userRouter);
};
