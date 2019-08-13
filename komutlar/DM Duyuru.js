const Discord = require('discord.js');
exports.run = (client, message, args) => {

  
    let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Özel DM den göndermek İstediğiniz Mesajı Yazınız.');
  
      client.users.forEach(u => {
u.sendMessage(mesaj)
})};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dm',"duyur"],
  permLevel: 4
};

exports.help = {
  name: 'dmgönder',
  description: '',
  usage: ''
};