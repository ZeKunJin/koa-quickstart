const statusConstants = require("@/constant/status");
const stringConstants = require("@/constant/string");

const { DEFAULT_SUCCESS, DEFAULT_FAILED } = statusConstants;

const responseMessages = {
  [statusConstants.INVALID_TOKEN]: stringConstants.INVALID_TOKEN,
};

class Response {
  constructor({ data = {}, message = "", code = DEFAULT_SUCCESS } = {}) {
    this.data = data;
    this.message = responseMessages[code] || String(message);
    this.code = Number(code);
  }

  success(code = DEFAULT_SUCCESS) {
    this.code = code;
    this.message = responseMessages[code] || this.message;
    return this;
  }

  failed(code = DEFAULT_FAILED) {
    this.code = code;
    this.message = responseMessages[code] || this.message;
    return this;
  }
}

module.exports = Response;
