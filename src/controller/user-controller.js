const Response = require("@/utils/response");
const jwt = require("@/utils/jwt");
const userService = require("@/service/user-service");

const userController = {
  async getUserInfo(ctx) {
    const { header } = ctx.request;
    const { id } = jwt.parseToken(header);
    try {
      const data = await userService.getUserInfo(id);
      ctx.body = new Response({ data });
    } catch (message) {
      ctx.body = new Response({ message }).faild();
    }
  },
};

module.exports = userController;
