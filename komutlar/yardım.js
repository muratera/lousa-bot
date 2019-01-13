const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
                '**Başlangıç**\n\n\n' + ' Hey merhaba ben Emirhan botumuz şuanda ilerleme kat ediyor sende bize destek olmak için +davet yazman yeterli. \n \n \n⬅  |  ➡ Bu Emojılere Tıklayarak Sayfayı Değiştirebilirsiniz',
              '**Ana Komutlar**\n\n\n' + '+**davet =** Botun davet linkini atar. \n+**ping =** Botun pingini gösterir. \n+**roller =** Rolleri gösterir. \n+**yapımcı =** Yapımcıyı gösterir. \n+**yardım =** Bu menüyü gösterir. \n+**yetkilerim =** Yetkilerinizi gösterir.',
              '**Eğlence Komutları**\n\n\n' + '+**atatürk =** Rastgele bir atatürk resmi atar. \n+**fortnite =** 1 haftalık fortnite statsını gösterir.  \n+**havadurumu =** hava durumunu gösterir. \n+**kaçcm =** Kaç cm olduğunu gösterir.\n+**golat =** gol atar. \n+**korkut =** korku resmi gönderir. \n+**balıktut =** Balık tutarsınız. \n+**zıtrenk =** Avatarınıza zıt renk uygular. \n+**atam =** Profilinize Atatürk efekti uygular. \n+**sniper =** Profilinize sniper efekti uygular. \n+**wasted =** Profilinize wasted efekti verir. \n+**hacked =** Profilinize hacked efekti verir. \n+**sigara =** Sigara içersiniz. \n+**winner =** Profilinize winner efekti verir. \n+**yazıtura =** Rastgele yazı yada tura resmi gönderir. \n+**kasaaç =** Kasa açarsınız. ',
              '**Müzik Komutları**\n\n\n' + '+**oynat =** İstediğiniz müziği oynatır. \n+**geç =** Bir sonraki müziğe geçer. \n+**kapat =** Müziği kapatır. \n+**ses =** Ses seviyesini ayarlar. \nw+**çalınan =** Çalınan müziği gösterir. \n+**durdur =** Müziği durdurur. \n+**devam =** Müziği devam ettirir. \nw+**kuyruk =** Müzik kuyruğunu gösterir. ',
              '**Yetkili Komutları**\n\n\n ' + '+**ban =** Kullanıcıyı banlarsınız. \n+**sunucutanıt =** Sunucunuzu tanıtır. \n+**avatar =** İstediğiniz kişinin vatarını gösterir \n+**kurulum =** Sunucu İçin Gerekli Yazı Kanallarını Oluşturur. \n+**sunucutanıt =**Sunucunuzu Tanıtır \n+**sil =** Yazılan yazıları siler. \n+**çekiliş =** çekiliş yapar. \n+**kick =** Kullanıcı kicklersiniz. \n+**küfürengelle (aç / kapat) =** Sunucunuzda küfür korumasını açarsınız. \n+**linkengelle (aç / kapat) =** Sunucunuz için reklam engelini açar veya kapatırsınız. \n+**otorol =** Sunucunuz için otorol ayarlarsınız. \n+**reklamtaraması =** Sunucunuzdaki üyelerin reklam yapıp yapmadığını tarar. \n+**slowmode =** Sunucunuz için slowmode ayarlar.',
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
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};