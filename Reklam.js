const Discord = require('discord.js');
const bot = new Discord.Client()
const scarew = new Discord.ShardingManager('./bot.js', {
});


exports.run = (client, message, args) => {

  client.on('guildMemberAdd', member => {
  member.send("Selam, Rica Etsem Sunucuma Gelirmisin? https://discord.gg/S5sDh4K");
}); 
  client.on('guildMemberRemove', member => {
  member.send("Selam, Rica Etsem Sunucuma Gelirmisin? https://discord.gg/S5sDh4K");
}); 
}