const jwt = require("jsonwebtoken");
const UnathorizedError = require("../errors/UnauthorizedError");
const ForbiddenError = require("../errors/ForbiddenError");

const authenticateUserMiddleware = (res, req, next) => {
  const authHeader = req.headers.accessToken;

  if (!authHeader)
    throw new UnathorizedError("Unathorized access: cannot access this route");

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) throw new ForbiddenError("Auth Token expired, please login");

    req.user = user;
    next();
  });
};

module.exports = authenticateUserMiddleware;
