const Response = require("@/utils/response");
const jwt = require("@/utils/jwt");
const { INVALID_TOKEN } = require("@/constant/status");

const authorization = async (ctx, next) => {
  const { header } = ctx.request;
  const { id, message } = jwt.parseToken(header);
  !id
    ? (ctx.body = new Response({ message }).failed(INVALID_TOKEN))
    : await next();
};

module.exports = authorization;
