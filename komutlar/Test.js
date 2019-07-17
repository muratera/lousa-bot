const Discord = require('discord.js');

exports.run = async (client, message, params, args) => {
    let kitaplık = args.slice(1).join(' ');
  	let link = args[0]
  
    if (!link) return message.channel.send(`:no_entry: Kodun Linkini Yazmalısın.`).then(msg => msg.delete(10000))
    if (!kitaplık) return message.channel.send(`:no_entry: Kodun Kitaplığını Yazmalısn.`).then(msg => msg.delete(10000)) 
  
  
  const yardım = new Discord.RichEmbed()
  .addField(`Kod Hakkında Bilhiler`, `[Kodu Görüntülemek İçin Tıkla]({link})`)
  .addField(`Kitaplık Türü`, kitaplık,true)
  .addField(`Paylaşan`, message.author.username)
  .addField(`Kod Link`, link)
  .setTimestamp() 
  .setColor("RANDOM")
  .setFooter(`© ${client.user.username}   `,client.user.avatarURL)
  return message.channel.sendEmbed(yardım);
}


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
  };
  
  exports.help = {
    name: 'test',
    description: '',
   usage: ''
  };