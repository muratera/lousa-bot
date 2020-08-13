const db = require('quick.db')
const Discord = require('discord.js');
const client = new Discord.Client();

const radyo = {
    fenomen : "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio ",
    fenomenfm : "https://fenomenturk.listenfenomen.com/fenomenturk/128/icecast.audio ",
    kralpop : "https://www.kralmuzik.com.tr/radyo/kral-pop ",
    vergın : "https://17703.live.streamtheworld.com/VIRGIN_RADIO.mp3 ",
    numberfm : "https://n10101m.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e2f95dcb16_1/playlist.m3u8 ",
    radyo45 : "https://stream.radyo45lik.com:4545/stream ",
    istanbul : "https://onlineradiobox.com/json/tr/istanbulunsesi/play?platform=web ",
    aral : "https://listen.powerapp.com.tr/powerturk/mpeg/icecast.audio?/;stream.mp3 ",
    turkuvaz : "https://trkvz-radyolar.ercdn.net/radyoturkuvaz/playlist.m3u8 ",
    fg : "https://onlineradiobox.com/json/tr/fg937/play?platform=web ",
    medya : "https://onlineradiobox.com/json/tr/medya/play?platform=web ",
    polis : "https://m.egm.gov.tr:8093/ ",  
    rock : "https://rockfm.rockfm.com.tr:9450/stream ", 
    tgrt : "https://onlineradiobox.com/json/tr/tgrtfm/play?platform=web ",
    joy : "https://playerservices.streamtheworld.com/api/livestream-redirect/JOY_TURKAAC.aac ",
    odtü : "http://stream.radyoodtu.com.tr/canli ",
}

exports.run = function(bot, message, args) {

  ;
    if (!message.member.voiceChannel) return message.reply("Sana bağlanmam için ilk önce sesli bir kanala katılmalısın.").then(m => m.delete(15000)).catch(console.error);
    else {
        if (!args[0] || args[0] === "help" || args[0] === "yardım") {
            message.reply("**\n \n  🎵 Radyo İstasyonları 🎵  \n  \n 1 = Fenomen \n 2 = FenomenTürk \n 3 = KralPop \n 4 = Virgin Radio\n 5 = Number1\n 6 = Radyo 45'lik \n 7 = İstanbul'un Sesi \n 8 = Aral FM \n 9 = Radyo Turkuvaz \n 10 = Radyo FG \n 11 = Medya FM \n 12 = Polis Radyosu \n 13 = Rock FM \n 14 = TGRT FM \n 15 = Joy Türk \n 16 = Radyo ODTÜ \n \n Açmak İçin t.radyo <numara> \n Kapatmak İçin t.radyo kapat**").then(m => m.delete(40000)).catch(console.error);
        } else if (args[0].toLowerCase() === "fenomen" || args[0] === "1") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomen);
                message.reply("🎧 | **Başarılı! 🎻`FenomenFM`🎻 çalınıyor.**");
            })
    
            } else if (args[0].toLowerCase() === "FENOMEN TURK" || args[0] === "2") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomenfm);
                message.reply("🎧 | **Başarılı! `FenomenTÜRK` çalınıyor.**");
            })                                                                                    
        } else if (args[0].toLowerCase() === "kapat" || args[0].toLowerCase() === "bitir") {
                message.member.voiceChannel.leave();
    return message.channel.send(`Bu kanaldan ayrıldım ${message.member.voiceChannel}.`);
        
            } else if (args[0].toLowerCase() === "KralPop" || args[0] === "3") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.kralpop);
                message.reply("🎧 | **Başarılı! `KralPop` çalınıyor.**");
            })    
            } else if (args[0].toLowerCase() === "Virgin Radio" || args[0] === "4") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.vergın);
                message.reply("🎧 | **Başarılı! `Virgin Radio` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`");
            })   
            } else if (args[0].toLowerCase() === "Number One FM" || args[0] === "5") {
             message.member.voiceChannel.join().then(connection => {
               var dispatcher = connection.playStream(radyo.numberfm);
               message.reply("🎧 | **Başarılı! `Number 1` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`");
            })
            } else if (args[0].toLowerCase() === "Radyo 45'lik" || args[0] === "6") {
             message.member.voiceChannel.join().then(connection => {
               var dispatcher = connection.playStream(radyo.radyo45);
               message.reply("🎧 | **Başarılı! `Radyo 45'lik` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`");
             })
            } else if (args[0].toLowerCase() === "İstanbul'un Sesi" || args[0] === "7") {
             message.member.voiceChannel.join().then(connection => {
               var dispatcher = connection.playStream(radyo.istanbul);
               message.reply("🎧 | **Başarılı! `İstanbul'un Sesi` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`");
            })
            } else if (args[0].toLowerCase() === "Aral FM" || args[0] === "8") {
             message.member.voiceChannel.join().then(connection => {
               var dispatcher = connection.playStream(radyo.aral);
               message.reply("🎧 | **Başarılı! `Aral FM` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`");
            })  
            } else if (args[0].toLowerCase() === "Radyo Turkuvaz" || args[0] === "9") {
             message.member.voiceChannel.join().then(connection => {
               var dispatcher = connection.playStream(radyo.turkuvaz);
               message.reply("🎧 | **Başarılı! `Radyo Turkuvaz` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`");
            }) 
            } else if (args[0].toLowerCase() === "Radyo FG" || args[0] === "10") {
             message.member.voiceChannel.join().then(connection => {
               var dispatcher = connection.playStream(radyo.fg);
               message.reply("🎧 | **Başarılı! `Radyo FG` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`");
            })
            } else if (args[0].toLowerCase() === "Medya FM" || args[0] === "11") {
             message.member.voiceChannel.join().then(connection => {
               var dispatcher = connection.playStream(radyo.medya);
               message.reply("🎧 | **Başarılı! `Medya FM` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`");
            })
            } else if (args[0].toLowerCase() === "Polis Radyosu" || args[0] === "12") {
             message.member.voiceChannel.join().then(connection => {
               var dispatcher = connection.playStream(radyo.polis);
               message.reply("🎧 | **Başarılı! `Polis Radyosu` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`");
            })
            } else if (args[0].toLowerCase() === "Rock FM" || args[0] === "13") {
             message.member.voiceChannel.join().then(connection => {
               var dispatcher = connection.playStream(radyo.rock);
               message.reply("🎧 | **Başarılı! `Rock FM` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`");
            })
            } else if (args[0].toLowerCase() === "TGRT FM" || args[0] === "14") {
             message.member.voiceChannel.join().then(connection => {
               var dispatcher = connection.playStream(radyo.tgrt);
               message.reply("🎧 | **Başarılı! `TGRT FM` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`");
            })
            } else if (args[0].toLowerCase() === "Joy Türk" || args[0] === "15") {
             message.member.voiceChannel.join().then(connection => {
               var dispatcher = connection.playStream(radyo.joy);
               message.reply("🎧 | **Başarılı! `Joy Türk` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`");
            })
            } else if (args[0].toLowerCase() === "Radyo ODTÜ" || args[0] === "16") {
             message.member.voiceChannel.join().then(connection => {
               var dispatcher = connection.playStream(radyo.odtü);
               message.reply("🎧 | **Başarılı! `Radyo Odtü` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`");
            })
    }
    }
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'radyo',
  description: '',
  usage: 'radyo'
};