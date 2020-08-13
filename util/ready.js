const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log(`Başarıyla Giriş Yaptım!`);
client.user.setStatus("idle"); //dnd = rahatsız etmeyin - idle = boşta - online = çevrimiçim

}