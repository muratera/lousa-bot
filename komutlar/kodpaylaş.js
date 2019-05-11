const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let botisim = args[0]
  let sahip = args[1]
  let sebep = args[2]
  let sebep1 = args[3]
  let sebep2 = args[4]
  let sebep3 = args[5]
  let sebep4 = args[6]
  let sebep5 = args[7]
  let sebep6 = args[8]
  let sebep7 = args[9]
  let sebep8 = args[10]
  let sebep9 = args[11]
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
