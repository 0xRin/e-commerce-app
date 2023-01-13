const { StatusCodes } = require("http-status-codes");

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.status = StatusCodes.CONFLICT;
  }
}

module.exports = ConflictError;
