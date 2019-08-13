const Discord = require('discord.js');


exports.run = (client, message, args) => {
  message.delete();
      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription("")

      client.users.forEach(u => {
u.sendEmbed("deneme")
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dm'],
  permLevel: 4
};

exports.help = {
  name: 'herkesedm',
  description: '',
  usage: ''
};