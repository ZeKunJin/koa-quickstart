const jsonwebtoken = require("jsonwebtoken");
const { JWT_SECRET } = require("@/config/app.config");
const { AUTHORIZATION } = require("@/constant/system");

const jwt = {
  generate(value, secret = JWT_SECRET) {
    return jsonwebtoken.sign(value, secret);
  },

  parse(value, secret = JWT_SECRET) {
    return jsonwebtoken.verify(value, secret);
  },

  parseToken(header, secret = JWT_SECRET) {
    const token = header[AUTHORIZATION];
    try {
      return jsonwebtoken.verify(token, secret);
    } catch (message) {
      return { message };
    }
  },
};

module.exports = jwt;
