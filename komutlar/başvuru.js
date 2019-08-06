const Discord = require('discord.js');


exports.run = function(client, message, args) {
  let basvuru = "606118453383790602"
  
  let isim = args[0]
  let diller = args[1]
  let kaçkod = args[3]
  let kendihakkinda = args.slice(4).join(' ');
  
  if (!isim) return message.channel.send(`:no_entry: İsmini Yazmalısın`).then(msg => msg.delete(10000))
  if (!diller) return message.channel.send(`:no_entry: Hangi Kodlama Dilleri bildiğini Yazmalısn!`).then(msg => msg.delete(10000))
  if (!kaçkod) return message.channel.send(`:no_entry: Kaç Kod Paylşırısn`).then(msg => msg.delete(10000))   
  if (!kendihakkinda) return message.channel.send(`:no_entry: Seni Neden Seçmemiz Gerektiğini Yazmalısın`).then(msg => msg.delete(10000))

  
  
  
const embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle("Başvuru")
  .addField("Başvuran Kişi", message.author)
  .addField("Başvuran Kişinin ID", message.author.id)
  .addField("İsim", isim, true)
  .addField("Kod Sayısı", kaçkod, true)
  .addField("Diller", diller, true)
  .addField("Hakıında", kendihakkinda)

client.channels.get(basvuru).send(embed)
  
    message.channel.send(`:white_check_mark: Başvurunuz Alındı.`).then
 

}

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