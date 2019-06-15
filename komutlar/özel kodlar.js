const Discord = require('discord.js');
const DBL = require('dblapi.js')
const client = new Discord.Client();


exports.run = (client, message, params) => {
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzMjI3MjU5NzU1NjAwMjgyOCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTU5NTg5ODI4fQ.KDEZP9r260d8V3pRgRRDUqWTsonn8nzgX_KSNBphEN4', client)
  dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  let user = message.member
  let guild = message.guild
  let rol = guild.roles.find('name', 'Özel Komutlar')

  user.addRole(rol)
  message.channel.send(`${message.author} Başarıyla Özel Komutlar rolu Alındı!`)
  message.delete()

} else {
        message.channel.send(`Bu komutu kullanabilmek için 12 saatte bir https://discordbots.org/bot/532272597556002828/vote sitesinden bota oy vermen gerekiyor. Eğer oy verdiysen onaylanmasını bekle, birkaç dakika sürebilir.`)
      }
  });
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["özelkod","oyverdim"],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'Komut açıklaması',
  usage: 'Komut kullanımı'
};