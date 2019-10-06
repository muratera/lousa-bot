const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
  
    let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Özel DM den göndermek İstediğiniz Mesajı Yazınız.');  
  
      client.users.forEach(user => {
  user.send(mesaj)
message.delete();
})};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dm'],
  permLevel: 4
};

exports.help = {
  name: 'herkesedm',
};