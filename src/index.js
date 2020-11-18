const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const { discorToken } = require('./config');

client.on('ready', () => {
  console.log(`logged in as ${client.user.tag}`);
});

client.on('message', (msg) => {
  if (msg.content.toLocaleLowerCase().includes('!fs')) {
    msg.reply(`Por qué usan otros bots? :(`);
  }

  if (
    msg.content.toLocaleLowerCase().includes('buenas noches') ||
    msg.content.toLocaleLowerCase().includes('gn')
  ) {
    msg.reply(`good night a todos baibis`);
  }
});

client.on('message', (msg) => {
  if (msg.content.toLocaleLowerCase().includes('hola')) {
    msg.react('✌');
    const embed = new MessageEmbed()
      .setTitle('Welcome')
      .setColor('0779e4')
      .setDescription(`¡¡Enjoy the server!! ${msg.author}`);
    msg.channel.send(embed);
  }
});

client.login(discorToken);
