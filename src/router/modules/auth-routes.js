const Router = require("@koa/router");
const authController = require("@/controller/auth-controller");

const router = new Router({ prefix: "/auth" });

router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;
