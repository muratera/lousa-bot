const Discord = require('discord.js');
const db = require("db");
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const Jimp = require('jimp');
const moment = require('moment');
require('./util/eventLoader')(client);
var prefix = ayarlar.prefix;
let owner = "387968413013901313";

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

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

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

//////////////////////////////////////////
////////////GENEL DİSCORD
//////////////////////////////////////////

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "genelsw") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Kurulum Başladı`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })



        
 message.guild.createChannel('📋kurallar📋', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "")));
            message.guild.createChannel('📢duyuru📢', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "")));
             
      message.guild.createChannel(`💬genel-sohbet💬`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "")));
     message.guild.createChannel(`🤖bot-chat🤖`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "")));

    message.guild.createChannel('Hoşgeldin', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🤜  Hoşgeldiniz  🤛`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Hoşgeldin")))

    message.guild.createChannel('Epic Odalar', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🔒 Yönetim`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "Epic Odalar")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "Kurucu");
      let role3 = message.guild.roles.find("name", "Yönetici");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

  message.guild.createChannel(`🌈 VIP Odası`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Epic Odalar")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    let role3 = message.guild.roles.find("name", "VIP");
    c.overwritePermissions(role, {
        CONNECT: true,
    });    
    c.overwritePermissions(role, {
        CONNECT: false,
    });
})
   
message.guild.createChannel('Sohbet Odaları', 'category', [{
    id: message.guild.id,
    }]);

    message.guild.createChannel(`☕ Sohbet Odası`, 'voice')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "Sohbet Odaları")))
    message.guild.createChannel(`🎬 Film Odası`, 'voice')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "Sohbet Odaları")))
    message.guild.createChannel(`🎵 Müzik Odası`, 'voice')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "Sohbet Odaları")))


message.guild.createChannel('Oyunlar', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🎮》LOL`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Oyunlar")))
 message.guild.createChannel(`🎮》ZULA`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "Oyunlar")))
 message.guild.createChannel(`🎮》COUNTER STRİKE`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Oyunlar")))
 message.guild.createChannel(`🎮》PUBG`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "Oyunlar")))
  message.guild.createChannel(`🎮》FORTNİTE`, 'voice')
  .then(channel =>
   channel.setParent(message.guild.channels.find(channel => channel.name === "Oyunlar")))
   message.guild.createChannel(`🎮》MİNECRAFT`, 'voice')
   .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Oyunlar")))
    message.guild.createChannel(`🎮》ROBLOX`, 'voice')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "Oyunlar")))
     message.guild.createChannel(`🎮》WOLFTEAM`, 'voice')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "Oyunlar")))



      message.guild.createRole({
        name: 'Kurucu',
        color: 'RED',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: 'Yönetici',
        color: 'BLUE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.createRole({
        name: 'Moderatör',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.createRole({
        name: 'VIP',
        color: '00ffff',
      })

      message.guild.createRole({
        name: 'Üye',
        color: 'WHITE',
      })

      message.guild.createRole({
        name: 'Bot',
        color: 'ORANGE',
      })

       message.channel.send("Gerekli Odalar Kuruldu!")
     
    
}
});

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

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

//////////////////////////////////////////
////////////TURNUVA DİSCORD
//////////////////////////////////////////

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "turnuvadc") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Kurulum Başladı`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })


     message.guild.createChannel(`Genel`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "")));

      message.guild.createChannel('Yetkili Odaları', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🔒 Yönetim`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "Yetkili Odaları")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "Yönetici");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });


message.guild.createChannel('Oyunlar', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🎮》LOL`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Oyunlar")))
 message.guild.createChannel(`🎮》ZULA`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "Oyunlar")))
 message.guild.createChannel(`🎮》COUNTER STRİKE`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Oyunlar")))
 message.guild.createChannel(`🎮》PUBG`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "Oyunlar")))
  message.guild.createChannel(`🎮》FORTNİTE`, 'voice')
  .then(channel =>
   channel.setParent(message.guild.channels.find(channel => channel.name === "Oyunlar")))
   message.guild.createChannel(`🎮》MİNECRAFT`, 'voice')
   .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Oyunlar")))
    message.guild.createChannel(`🎮》ROBLOX`, 'voice')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "Oyunlar")))
     message.guild.createChannel(`🎮》WOLFTEAM`, 'voice')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "Oyunlar")))



      message.guild.createRole({
        name: 'Kurucu',
        color: 'RED',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: 'Yönetici',
        color: 'BLUE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.createRole({
        name: 'Moderatör',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.createRole({
        name: 'VIP',
        color: '00ffff',
      })

      message.guild.createRole({
        name: 'Üye',
        color: 'WHITE',
      })

      message.guild.createRole({
        name: 'Bot',
        color: 'ORANGE',
      })

       message.channel.send("Gerekli Odalar Kuruldu!")
     
    
}
});

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

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

//////////////////////////////////////////
////////////OYUN DİSCORD
//////////////////////////////////////////

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "oyunsw") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Kurulum Başladı`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })



      message.guild.createChannel(`Fortnite`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "")));
     message.guild.createChannel(`CSGO`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "")));
     message.guild.createChannel(`Pubg`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "")));
     message.guild.createChannel(`Lol`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "")));



    message.guild.createChannel('Hoşgeldin', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🤜  Hoşgeldiniz  🤛`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Hoşgeldin")))

    
    
    
    

    message.guild.createChannel('🎮》Fortnite', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`Duo 1`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Fortnite")))
message.guild.createChannel(`Duo 2`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Fortnite")))
message.guild.createChannel(`Duo 3`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Fortnite")))
message.guild.createChannel(`Squad 1`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Fortnite")))
message.guild.createChannel(`Squad 2`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Fortnite")))
message.guild.createChannel(`Squad 3`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Fortnite")))
message.guild.createChannel(`Kreatif 1`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Fortnite")))
message.guild.createChannel(`Kreatif 2`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Fortnite")))
message.guild.createChannel(`Kreatif 3`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Fortnite")))
message.guild.createChannel(`Save The World`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Fortnite")))



    message.guild.createChannel('🎮》Pubg', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`Duo 1`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Pubg")))
message.guild.createChannel(`Duo 2`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Pubg")))
message.guild.createChannel(`Duo 3`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Pubg")))
message.guild.createChannel(`Squad 1`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Pubg")))
message.guild.createChannel(`Squad 2`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Pubg")))
message.guild.createChannel(`Squad 3`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Pubg")))
message.guild.createChannel(`Üçlü Squad 1`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Pubg")))
message.guild.createChannel(`Üçlü Squad 2`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Pubg")))
message.guild.createChannel(`Üçlü Squad 3`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Pubg")))



    message.guild.createChannel('🎮》CSGO', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`Rekabetçi 1`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》CSGO")))
message.guild.createChannel(`Rekabetçi 2`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》CSGO")))
message.guild.createChannel(`Rekabetçi 3`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》CSGO")))
message.guild.createChannel(`Yoldaş 1`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》CSGO")))
message.guild.createChannel(`Yoldaş 2`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》CSGO")))
message.guild.createChannel(`Yoldaş 3`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》CSGO")))
 message.guild.createChannel(`Topluluk Sunucusu`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》CSGO")))



    message.guild.createChannel('🎮》Lol', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`Dereceli Maç 1`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Lol")))
message.guild.createChannel(`Dereceli Maç 2`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Lol")))
message.guild.createChannel(`Dereceli Maç 3`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Lol")))
message.guild.createChannel(`Ranked Maç 1`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Lol")))
message.guild.createChannel(`Ranked Maç 2`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Lol")))
message.guild.createChannel(`Ranked Maç 3`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Lol")))
 message.guild.createChannel(`Özel Oyun`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》Lol")))



      message.guild.createRole({
        name: 'Kurucu',
        color: 'RED',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: 'Yönetici',
        color: 'BLUE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.createRole({
        name: 'Moderatör',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.createRole({
        name: 'Fortnite',
        color: '00ffff',
      })
      message.guild.createRole({
        name: 'Lol',
        color: '00ffff',
      })
      message.guild.createRole({
        name: 'CSGO',
        color: '00ffff',
      })
      message.guild.createRole({
        name: 'PUBG',
        color: '00ffff',
      })

      message.guild.createRole({
        name: 'Üye',
        color: 'WHITE',
      })

      message.guild.createRole({
        name: 'Bot',
        color: 'ORANGE',
      })

       message.channel.send("Herşey Tamam Kanka (Yapımcı Emirhan Cem)")
     
    
}
});

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