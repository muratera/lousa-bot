const Discord = require('discord.js');


exports.run = function(client, message, args) {

  let reason = args.slice(0).join(' ');
  let basvuru = "568920569093816345"// başvurunun gideceği kanal
	let kanal = "579292449588117526" // başvurunun yapılacağı kanal
	
  if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`).then(msg => msg.delete(10000))
	if (message.channel.id == kanal) {
  if (!reason) return message.channel.send(`:no_entry: Bildiğin Dilleri Yazmalısn!.`).then(msg => msg.delete(10000))
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setTitle("Başvuru")
  .addField("Başvuran Kişi", message.author)
  .addField("Başvuran Kişinin ID", message.author.id)
  .addField("Diller", reason)
  client.channels.get(basvuru).send(embed)
  message.channel.send(`:white_check_mark: Başvurunuz Alındı.`).then
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'başvuru', 
  description: "",
  usage: ''
};