const Discord = require('discord.js');

exports.run = async (client, message, args) => {
if (!message.guild) {
  return message.author.send(`:x: **Bu Komut Bu Sunucuda Devre Dışı https://discord.gg/GsSc7Ne**`); }
if (message.author.bot === true) {
  return;
}
  let user = message.member
  let guild = message.guild
  let rol = guild.roles.find('name', 'HTML </>')

  user.addRole(rol)
  message.channel.send(`${message.author} Başarıyla HTML rolu Alındı!`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'html',
  description: "html Rolu Almaya Ne Dersin",
  usage: 'html'
}