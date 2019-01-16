const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '**Saldırı Komutları**\n\n\n' + '+**saldır =** Sunucuda Kanallar açar \n+**ban <kişi> a =** Kişiyi Banlar(Herkes kullana bilir) \n+** =**  ',
              //'**Yetkili Komutları**\n\n\n ' + '+**ban =** Kullanıcıyı banlarsınız. \n+**oylama <oylamaismi> =** Oylama Yapar \n+**sunucutanıt =** Sunucunuzu tanıtır. \n+**avatar =** İstediğiniz kişinin vatarını gösterir \n+**kurulum =** Sunucu İçin Gerekli Yazı Kanallarını Oluşturur. \n+**sunucutanıt =**Sunucunuzu Tanıtır \n+**sil =** Yazılan yazıları siler. \n+**çekiliş =** çekiliş yapar. \n+**kick =** Kullanıcı kicklersiniz. \n+**küfürengelle (aç / kapat) =** Sunucunuzda küfür korumasını açarsınız. \n+**linkengelle (aç / kapat) =** Sunucunuz için reklam engelini açar veya kapatırsınız. \n+**otorol =** Sunucunuz için otorol ayarlarsınız. \n+**reklamtaraması =** Sunucunuzdaki üyelerin reklam yapıp yapmadığını tarar. \n+**slowmode =** Sunucunuz için slowmode ayarlar.',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapp.com/avatars/510453815003054090/e764556833ceaa8099d38f8c1b6ea635.png?size=204')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {
  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
   message.react(":white_check_mark: ")
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'syardım',
description: 'Yardım Listesini Gösterir',
usage: 'syardım'
};

const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**Bot Link**: https://discordapp.com/oauth2/authorize?client_id=534424717197574159&scope=bot&permissions=871890302*' );
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini gönderir.',
  usage: 'davet'
};
