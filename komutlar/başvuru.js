const Discord = require('discord.js');

const cevaplar = [    "https://forms.gle/MuVWvxbtmPT3eWZL7"];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    message.channel.send(cevap)
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["link","başvurulink"],
  permLevel: 0 
};

exports.help = {
  name: 'başvuru', 
  description: '',
  usage: ''
};