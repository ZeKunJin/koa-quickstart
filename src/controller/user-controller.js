const Response = require("@/utils/response");
const jwt = require("@/utils/jwt");
const userService = require("@/service/user-service");

const userController = {
  async getUserInfo(ctx) {
    const { header } = ctx.request;
    const { id: _id, message } = jwt.parseToken(header);
    if (_id) {
      const data = await userService.getUserInfo(_id);
      ctx.body = new Response({ data });
    } else {
      ctx.body = new Response({ message }).failed();
    }
  },
};

module.exports = userController;
