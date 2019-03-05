const Discord = require('discord.js');

const cevaplar = [    "\nİninal Barkod : 0 000051 973834 \nBynoGame Link : https://www.bynogame.com/destekle/swetzz"];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    message.channel.send(cevap)
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'bağış', 
  description: '',
  usage: 'bağış'
};