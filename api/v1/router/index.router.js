const taskRouter = require("./task.router");
const userRouter = require("./users.router");
const auhtMiddlewares = require("../middlewares/auth.middlewares");

module.exports = (app) => {
  const version = "/api/v1";

  app.use(version + "/tasks",auhtMiddlewares.requireAuth ,taskRouter);

  app.use(version + "/users", userRouter);
};
