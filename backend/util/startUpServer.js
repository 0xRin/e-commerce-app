const connectDB = require("../db/connectDB");

const startUpServer = async (port, app) => {
  try {
    await connectDB().then(() => console.log("Connected To DB"));
    app.listen(port, () => console.log(`Listening on ${port}`));
  } catch (e) {
    console.log(e, "Can't connect");
  }
};

module.exports = startUpServer;
