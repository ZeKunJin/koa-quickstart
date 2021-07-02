const Response = require("@/utils/response");
const userService = require("@/service/user-service");

const authController = {
  async login(ctx) {
    const { body } = ctx.request;
    try {
      const token = await userService.login(body);
      const data = { token };
      ctx.body = new Response({ data });
    } catch (message) {
      ctx.body = new Response({ message }).failed();
    }
  },

  async register(ctx) {
    const { body } = ctx.request;
    try {
      await userService.register(body);
      ctx.body = new Response();
    } catch (message) {
      ctx.body = new Response({ message }).failed();
    }
  },

  getRoutes(ctx) {
    ctx.body = new Response({ data: [] });
  },
};

module.exports = authController;
