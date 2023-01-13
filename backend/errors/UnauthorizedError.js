const { StatusCodes } = require("http-status-codes");

class UnathorizedError extends Error {
  constructor(message) {
    super(message);
    this.status = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnathorizedError;
