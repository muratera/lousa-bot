const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let user = message.member
  let guild = message.guild
	let kanal = "584519785694494723" // js rolunun alınıcağı kanal
  
  if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece https://discord.gg/qWDXCTD Sunucusunda Kullanabilirsin!`)
	if (message.channel.id == kanal) {  
    };
  let rol = guild.roles.find('name', 'JS </>')

  user.addRole(rol)
  message.channel.send(`${message.author} Başarıyla JS rolu Alındı!`)
  message.delete()
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["qwry1","hyrds","hbjxs","hdc84","asd15"],
  permLevel: 0
}

exports.help = {
  name: 'zxrq3',
  description: "JS Rolu Almaya Ne Dersin",
  usage: 'js'
}