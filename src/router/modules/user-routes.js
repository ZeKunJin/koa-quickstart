const Router = require("@koa/router");
const authorization = require("@/middleware/authorization");
const userController = require("@/controller/user-controller");

const router = new Router({ prefix: "/user" });

router.get("/info", authorization, userController.getUserInfo);

module.exports = router;
