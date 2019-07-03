const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, params) => {
  var request = require('request');
  request('http://api.siderbot.ga/api/komikpaylasim', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
      var site = JSON.parse(body);
      message.channel.send(`${site.api}`)
    }
  })
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'api',
  description: 'komut',
  usage: 'komut'
};