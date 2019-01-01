const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("🚫 **Lütfen Silinicek Mesaj Miktarını Yazın.!** 🚫");
if (!args[0]) return message.channel.send('Bir sayı gir!')
if (isNaN(args[0])) return message.channel.send('Geçerli bir sayı gir!')
if (args[0] > 99) return message.channel.send('``99`` dan fazla mesaj silemem!')
message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(`**${args[0]}** adet mesaj silindi!`).then(nmsg => {
nmsg.delete(3000)
})
})
} 



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil <silinicek mesaj sayısı>'
};