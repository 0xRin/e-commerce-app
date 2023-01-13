const bcrypt = require("bcryptjs");

const checkPassword = async (requestPassword, storedPassword) => {
  return await bcrypt.compare(requestPassword, storedPassword);
};

module.exports = checkPassword;
