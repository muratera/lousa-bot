const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    var channel = client.channels.find('name', 'sunucutanit-komutu') 
    const asdf = await client.channels.get(message.channel.id).createInvite()
    message.delete();
    const embed = new Discord.RichEmbed()
        .setTitle("» Rosemary | Sunucu Tanıt")
        .setDescription("**Sunucu tanıtılmıştır. https://discord.gg/ab6eue4 tıklayarak sunucunu tanıttığın sunucuya katılabilirsin.**")
        .setFooter(" Righter 2018")
    message.channel.send(embed)
    const invite = new Discord.RichEmbed()
        .setAuthor("» Rosemary | Sunucu Tanıt")
        .addField('**» Tanıtan: **', message.author.username + '#' + message.author.discriminator)
        .addField('**» Sunucu Adı: **', message.guild.name)
        .setDescription(asdf.url)
    channel.send(invite)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'sunucutanıt',
    description: 'sunucutanıt',
    usage: 'sunucutanıt'
};