const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, params) => {

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendCode('asciidoc', `Selam 2 Saniyeni Ayırıp Sunucuma Gelirmisin? https://discord.gg/zKXnTDP`);
  if (message.channel.type !== 'dm') {
	  
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor()
    .setTimestamp()
    .setAuthor()
    .setDescription('');
    message.channel.sendEmbed() }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.sendCode('asciidoc', `Selam 2 Saniyeni Ayırıp Sunucuma Gelirmisin? https://discord.gg/zKXnTDP`);
    }
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['as'],
  permLevel: 0
};

exports.help = {
  name: 'as',
  description: 'Tüm komutları gösterir.',
  usage: 'as'
};
