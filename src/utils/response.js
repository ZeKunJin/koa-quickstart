const { SUCCESS_CODE, FAILED_CODE } = require("@/constant/status");

class Response {
  constructor({ data = {}, message = "", code = SUCCESS_CODE } = {}) {
    this.data = data;
    this.message = String(message);
    this.code = Number(code);
  }

  success({ code = SUCCESS_CODE, message = this.message } = {}) {
    this.code = code;
    this.message = message;
    return this;
  }

  failed({ code = FAILED_CODE, message = this.message } = {}) {
    this.code = code;
    this.message = message;
    return this;
  }
}

module.exports = Response;
