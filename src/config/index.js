const { config } = require("dotenv");
config();

module.exports = {
  discorToken: process.env.DISCORD_TOKEN,
};
