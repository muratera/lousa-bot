const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let user = message.member
  let guild = message.guild
	let kanal = "539169862996590610" // js rolunun alınıcağı kanal
  
  if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece #${kanal} kanalında kullanabilirsin.`)
	if (message.channel.id == kanal) {  
    };
  let rol = guild.roles.find('name', 'API')

  user.addRole(rol)
  message.channel.send(`${message.author} Başarıyla API rolu Alındı!`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'api',
  description: "html Rolu Almaya Ne Dersin",
  usage: ''
}