const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  let user = message.member
  let guild = message.guild
  
  let rol = guild.roles.find('name', 'Üye') //verilicek rol
  let rol2 = guild.roles.find('name', 'Kayıtsız')//alınıcak rol
  let isim = args[0]

  
  if (!isim) return message.channel.send(`İsmini girmelisin.`)
  
  user.setNickname(`${isim}`)
  user.addRole(rol)
  user.removeRole(rol2)
  message.channel.send(`${message.author} Sunucuya Kaydoldun !`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kayıt"],
  permLevel: 0
}

exports.help = {
  name: 'kayıt',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'kayıt isim'
}