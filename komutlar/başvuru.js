const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let reason = args.slice(0).join(' ');
  let guild = message.guild
  let terfiler = guild.channels.find('name', 'bot-log');
  if (!terfiler) return message.reply('`bot-log` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('Ne dil bildiğinizi yazmalısnız.');
  const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
  .setTimestamp()
    .addField('Durum:', 'Bekleniyor')
    .addField('Kişi:', `${message.author}`)
    .addField('Diller', reason);
	    message.channel.send(`:white_check_mark: Başvurunuz Alındı.`).then

	return guild.channels.get(terfiler.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['basvuru'],
  permLevel: 0
};

exports.help = {
  name: 'başvuru',
  description: 'Kullanıcıyı terfi ettirir.',
  usage: 'başvuru [kullanıcı]'
};