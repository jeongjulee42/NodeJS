const environment = process.env.ENVIRONMENT || "development";
const config = requrie("../knexfile.js")[environment];
module.exports = require("knex")(config);
