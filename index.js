const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("🏓 Pong!");
  }
});

client.login("MTQyODMwMDU5MjgwNzQxNTgzOA.G9v7Lc.WnE6SY8phGzv55mfeBkeScVXacCHokow_YflRE");
