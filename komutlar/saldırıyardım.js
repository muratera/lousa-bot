const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Müzik Komutları**\n\n\n' + '+**oynat =** İstediğiniz müziği oynatır. \n+**geç =** Bir sonraki müziğe geçer. \n+**kapat =** Müziği kapatır. \n+**ses =** Ses seviyesini ayarlar. \n+**çalınan =** Çalınan müziği gösterir.' );
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
