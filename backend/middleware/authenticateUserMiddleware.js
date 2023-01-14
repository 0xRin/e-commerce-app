const jwt = require("jsonwebtoken");
const UnathorizedError = require("../errors/UnauthorizedError");
const ForbiddenError = require("../errors/ForbiddenError");

const authenticateUserMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Bearer")) {
    throw new UnathorizedError("Unathorized: No Authorization Header");
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) throw new ForbiddenError("Auth Token invalid, please login");

    req.user = user;
    console.log(user);
    next();
  });
};

const authenticateRoleMiddleware = (req, res, next) => {
  authenticateUserMiddleware(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      throw new UnathorizedError("Cannot change another user's info");
    }
  });
};

const authenticateAdminPrivelageMiddleware = (req, res, next) => {
  authenticateUserMiddleware(req, res, () => {
    if (!req.user.isAdmin)
      throw new UnathorizedError("Route can only be access by admin");
  });

  next();
};

module.exports = {
  authenticateRoleMiddleware,
  authenticateAdminPrivelageMiddleware,
  authenticateUserMiddleware,
};
