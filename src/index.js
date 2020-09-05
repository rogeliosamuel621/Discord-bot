const { Client } = require("discord.js");
const client = new Client();
const { discorToken } = require("./config");

client.on("ready", () => {
  console.log(`logged in as ${client.user.tag}`);
});

client.on("message", (msg) => {
  if (msg.content === "Hola") {
    msg.reply("Hola!!");
  }
});

client.login(discorToken);
