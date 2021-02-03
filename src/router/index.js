const fs = require("fs");
const Router = require("@koa/router");

const router = new Router();

const modulesFiles = fs.readdirSync(`${__dirname}/modules`);
modulesFiles.forEach((element) => {
  router.use(require(`./modules/${element}`).routes());
});

module.exports = router;
