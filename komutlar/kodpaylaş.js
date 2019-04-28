const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let reason = args.slice(0).join(' '); 
 if (reason.length < 1) return message.reply('Ne dil bildiğinizi yazmalısnız.');
  const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
  .setTimestamp()
    .addField('Durum:', 'Bekleniyor')
    .addField('Kişi:', `${message.author}`)
    .addField('Diller', reason);
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
