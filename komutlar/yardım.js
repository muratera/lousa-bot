const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '**Kurulum**\n\n ' + '/**genelsw =** Genel Discord Sunucusu Kurar \n/**oyunsw =** Oyun Discordu Sunucusu Kurar',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapp.com/avatars/510453815003054090/e764556833ceaa8099d38f8c1b6ea635.png?size=204')
    .setFooter(`Yapımcı Emirhan Cem`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

      
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

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