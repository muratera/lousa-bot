const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply('Ping! **' + client.ping + '** ms');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["m"],
  permLevel: 4
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gĂ¶sterir.',
  usage: 'ping'
};