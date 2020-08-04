const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(``)
  console.log(`${client.user.username} İsimli Self Bot Çalışmakta!`);
  client.user.setStatus("online");
   var oyun = [
     
        "",
     
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/emirhancem0");
        }, 2 * 2500);
}