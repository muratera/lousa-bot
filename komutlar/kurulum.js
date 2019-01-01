const Discord = require('discord.js');


exports.run = (client, message, args) => {
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "Evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'Evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
        message.guild.createChannel(`📋kurallar📋`);
        message.guild.createChannel(`📢duyuru📢`);
        message.guild.createChannel(`💬genel-sohbet💬`);
        message.guild.createChannel(`📄gelen-giden📄`);
        message.guild.createChannel(`🤖bot-chat🤖`);
        message.guild.createChannel(`Yapımcı: Emirhan Cem`);
        message.guild.createChannel(`Yapımcı: Emirhan Cem`);
        message.guild.createChannel(`Yapımcı: Emirhan Cem`);
       

        message.channel.send(`Gerekli Kanalları Oluşturdum Reis.`);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kurulum',
  description: 'Üşengeç Sunucu Sahipleri İçin :D',
  usage: 'kurulum'
};