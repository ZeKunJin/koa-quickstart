const Router = require("@koa/router");
const authController = require("@/controller/auth-controller");

const router = new Router({ prefix: "/auth" });

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/routes", authController.getRoutes);

module.exports = router;
