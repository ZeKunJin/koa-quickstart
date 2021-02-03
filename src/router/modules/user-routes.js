const Router = require("@koa/router");
const userController = require("@/controller/user-controller");

const router = new Router({ prefix: "/user" });

router.get("/info", userController.getUserInfo);

module.exports = router;
