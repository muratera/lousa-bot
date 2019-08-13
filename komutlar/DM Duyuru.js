/*
BU KOMUTU KULLANIRSANIZ VE BOT DEĞİLDE BİR KİŞİNİN TOKENİNİ KULLANIYOSANIZ O KİŞİNİN HESABI DİSCORD TARAFINDAN KAPATILIR!
*/
const Discord = require('discord.js');

exports.run = (client, message, args) => {
client.users.forEach(u => {
u.sendEmbed("nabıyon bea")
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dm'],
  permLevel: 4
};

exports.help = {
  name: 'naberamk',
  description: '',
  usage: ''
};