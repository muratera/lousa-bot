const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let komut = args.join(' ');
  let yeri = args.join(' ');
  let link = args.join(' ');
  let modül = args.join(' ');

  let sebep9 = args[11]
 if (komut.length < 1) return message.reply('Komutun Adını Yaz');
 if (yeri.length < 1) return message.reply('Yerini Yaz');
 if (link.length < 1) return message.reply('Li');
 if (modül.length < 1) return message.reply('');

  const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
  .setTimestamp()
    .addField('n\:file_folder: **Komut Adı:**', `komut`)
    .addField(':newspaper: **Tür:**', yeri)
    .addField(":page_facing_up: **Link:**", `link`)
    .addField(":incoming_envelope: **Modül:**", `modül`)
    .setDescription('');

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
