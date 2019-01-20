client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucu-kur") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
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
             message.guild.createChannel('mod-log', 'text', [{
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
        CONNECT: false,
    });    
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})
   
message.guild.createChannel('Hoşgeldin', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🤜  Hoşgeldiniz  🤛`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Hoşgeldin")))

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
     
            })
    
}
});