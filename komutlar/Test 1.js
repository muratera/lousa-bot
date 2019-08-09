const Discord = require('discord.js');


exports.run = (client, message, args) => {
let mesaj = args.slice(0).join(' ');
 
  
  message.delete();
      client.users.forEach(u => {
          u.send(mesaj)
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dm'],
  permLevel: 4
};

exports.help = {
  name: 'deneme',
  description: '',
  usage: ''
};