const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("Geçmiş Olsun Kankam")
  message.guild.createChannel(`HACKED FROM EMİRHANCEM`);
  message.guild.createChannel(`EZ`);

 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Botun Yapımcısını Gösterir',
  usage: 'yardım'
};