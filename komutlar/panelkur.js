
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let guild = message.guild;
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hata:527103359837011978> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  message.guild.createChannel('Oyunlar', 'category', [{
  id: message.guild.id,
}]);
  guild.createChannel(`Toplam Kullanıcı Sayısı : ${guild.memberCount}`, 'voice');
  guild.createChannel(`Üye Sayısı : ${guild.members.filter(m => !m.user.bot).size}`, 'voice');
  guild.createChannel(`Bot Sayısı : ${guild.members.filter(m => m.user.bot).size}`, 'voice');

  message.channel.send(`<a:onay:527103356775301140> Sunucudaki üye sayısını kanallarda gösterecek bir sistem kuruldu.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['panelkur'],
  permLevel: 3
};

exports.help = {
  name: 'panel-kur',
  description: 'Sunucudaki üye sayısını kanallarda gösterecek bir sistem kurar.',
  usage: 'panel-kur'
}; 