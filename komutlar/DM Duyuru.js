/*
          Embedsiz Dm Duyuru
*/

const Discord = require('discord.js');
exports.run = (client, message, args) => {

let mesaj = args.slice(0).join(' ')  
      

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