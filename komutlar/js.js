const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let user = message.member
  let guild = message.guild
	let kanal = "579292449588117526" // js rolunun alınıcağı kanal
  
  if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`)
	if (message.channel.id == kanal) {  
    };
  let rol = guild.roles.find('name', 'JS </>')

  user.addRole(rol)
  message.channel.send(`${message.author} Başarıyla JS rolu Alındı!`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["javascriptx"],
  permLevel: 0
}

exports.help = {
  name: 'jsx',
  description: "JS Rolu Almaya Ne Dersin",
  usage: 'js'
}