const { FAILED_CODE } = require("@/constant/status");

const handler = {
  error() {
    return async (ctx, next) => {
      try {
        await next();
        const { code } = ctx.response.body;
        ctx.status = code;
      } catch (error) {
        ctx.status = FAILED_CODE;
      }
    };
  },
};

module.exports = handler;
