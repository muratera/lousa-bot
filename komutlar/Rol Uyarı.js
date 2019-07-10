const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
message.channel.send
(`
Maalasef Sunucumuzda Roller Böyle Alınmıyor! 

**Peki Nasıl Alıcam?**
http://bit.ly/kodal Sitesine Girp Yukardan Ne Kodu Alıcaksan Onun İsmine Tıkla.O Kisimda Aşağıda **Kod Al** Butonuna Tıkla Ekranda Çıkan Kodu Kopyala Ve <#595701678360231946> Kanalına "-Aldığın Kod" Şeklinde Rolünü Albilirsin

**Hiçbişey Anlamadım Amk Bidaha Anlat**
http://bit.ly/kodukullan Kanki Direk Bu Videoyu İzle

`)
  
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["jss"],
  permLevel: 4
};

exports.help = {
  name: 'htmll',
};