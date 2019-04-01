const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let user = message.member
  let guild = message.guild
	let kanal = "561928595359006720" // js rolunun alınıcağı kanal
  
  if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`)
	if (message.channel.id == kanal) {  
    };
  let rol = guild.roles.find('name', 'js')

  user.addRole(rol)
  message.channel.send(`${message.author} Başarıyla JS rolu Alındı!`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'js',
  description: "JS Rolu Almaya Ne Dersin",
  usage: 'js'
}