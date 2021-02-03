const { SUCCESS_CODE, FAILED_CODE } = require("@/constant/status");

class Response {
  constructor({ data = {}, message = "", code = SUCCESS_CODE } = {}) {
    this.data = data;
    this.message = String(message);
    this.code = Number(code);
  }

  success() {
    this.code = SUCCESS_CODE;
    return this;
  }

  failed() {
    this.code = FAILED_CODE;
    return this;
  }
}

module.exports = Response;
