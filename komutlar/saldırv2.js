const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("GOOG GAME")
  message.guild.createChannel(`SA AS`);
  message.guild.createChannel(`SA AS`);
  message.guild.createChannel(`SA AS`);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcı',
  description: 'Botun Yapımcısını Gösterir',
  usage: 'yapımcı'
};