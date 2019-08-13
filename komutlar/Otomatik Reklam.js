/*
       Biri bişey yazdığında otomatik dm den reklam yapar
*/
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendCode('asciidoc', `Selam, Rica Etsem Sunucuma Gelirmisin? https://discord.gg/S5sDh4K`);
  if (message.channel.type !== 'dm') {
}
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.sendCode('asciidoc', `Selam, Rica Etsem Sunucuma Gelirmisin? https://discord.gg/S5sDh4K`);
    }
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa',"naber","napıyon","iyi"],
  permLevel: 0
};

exports.help = {
  name: 'as',
  description: '',
  usage: ''
};
