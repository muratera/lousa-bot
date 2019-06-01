const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let user = message.member
  let guild = message.guild
	let kanal = "584519785694494723" // js rolunun alınıcağı kanal
  
  if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece https://discord.gg/qWDXCTD Sunucusunda Kullanabilirsin!`)
	if (message.channel.id == kanal) {  
    };
  let rol = guild.roles.find('name', 'HTML </>')

  user.addRole(rol)
  message.channel.send(`${message.author} Başarıyla HTML rolu Alındı!`)
  message.delete()
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["hahah","12547","csuc1","op159","xrdsz"],
  permLevel: 0
}

exports.help = {
  name: 'hjhs1',
  description: "html Rolu Almaya Ne Dersin",
  usage: 'html'
}