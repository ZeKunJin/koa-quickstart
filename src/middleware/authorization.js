const Response = require("@/utils/response");
const jwt = require("@/utils/jwt");

const authorization = async (ctx, next) => {
  const { header } = ctx.request;
  const { id, message } = jwt.parseToken(header);
  id ? await next() : (ctx.body = new Response({ message }).failed());
};

module.exports = authorization;
