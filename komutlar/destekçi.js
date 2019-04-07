const Discord = require('discord.js');
const client = new Discord.Client();
const DBL = require('dblapi.js');
const dbl = new DBL('NTIzODM4OTU0MzI0MDk5MTEz.D3dLCQ.00q7Etx1Eun45tBO1TEOQXu3HGM', client);

exports.run = async (client, message, args) => {
  let user = message.member
  let guild = message.guild
	let kanal = "547882023604191292" // js rolunun alınıcağı kanal
  
  if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`)
	if (message.channel.id == kanal) {  
    };
  let rol = guild.roles.find('name', 'Destekçi')

  user.addRole(rol)
  message.channel.send(`${message.author} Başarıyla JS rolu Alındı!`)
  message.channel.send("Bu komutu kullanabilmek için 12 saatte bir https://discordbots.org/bot/523838954324099113/vote sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyin.")
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["oyverdim"],
  permLevel: 0
}

exports.help = {
  name: 'oyverdim',
  description: "JS Rolu Almaya Ne Dersin",
  usage: 'oyverdim'
}