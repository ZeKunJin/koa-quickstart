require("module-alias/register");

const Koa = require("koa");
const logger = require("koa-logger");
const cors = require("@koa/cors");
const bodyparser = require("koa-bodyparser");

const router = require("@/router");
const handler = require("@/middleware/handler");
const { PORT } = require("@/config/app.config");

const app = new Koa();

app.use(logger());
app.use(cors());
app.use(bodyparser());
app.use(handler.error());
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT);
console.log(`service start on port: ${PORT} ...`);
