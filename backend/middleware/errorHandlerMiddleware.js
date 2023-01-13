const errorHandlerMiddleware = (error, req, res, next) => {
  const customError = {
    message: error.message || "Internal error occurred",
    status: error.status || 500,
  };

  res.status(customError.status).json({ error: customError.message });
};

module.exports = {
  errorHandlerMiddleware,
};
