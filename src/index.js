require("module-alias/register");

const Koa = require("koa");
const logger = require("koa-logger");
const bodyparser = require("koa-bodyparser");

const router = require("@/router");
const { PORT } = require("@/config/app.config");

const app = new Koa();

app.use(logger());
app.use(bodyparser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT);
console.log(`service start on port: ${PORT} ...`);
