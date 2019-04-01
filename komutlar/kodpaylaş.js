const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let kod = args.slice(0).join('');
if (kod.length < 1) return message.reply('Kodu Link Yazmalısın');
  message.delete();
  message.channel.send(`**:clipboard: Kod Link:\n${kod}**`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kod', 'kodpaylaş'],
  permLevel: 0
};

exports.help = {
  name: 'kp',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'kp [yazdırmak istediğiniz şey]'
};
