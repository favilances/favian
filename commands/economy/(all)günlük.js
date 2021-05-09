module.exports = {
    name: "günlük-para",
    description: "Economy Günlük",
    usage: "prefix+günlük-para",
    guildOnly: true,
    enabled: true,
    aliases: ["daily","günlük"],
    category: "Economy",
    cooldown: 5,
    permissions: ["VIEW_CHANNEL", "SEND_MESSAGES"],
    favi(client, message, args) {
        const Discord = require('discord.js');
        const db = require('old-wio.db');
        const ms = require('ms')
        let kontrol = db.fetch(`dil_${message.guild.id}`);
        if (kontrol == "tr") {
            let yavaşmod = 8.64e+7, // 24 Saat
                amount = Math.floor(Math.random() * 1000) + 4000;
            const lastDaily = db.fetch(`günlükbea_${message.guild.id}`)
            if (lastDaily !== null && yavaşmod - (Date.now() - lastDaily) > 0) {
                let timeObj = ms(yavaşmod - (Date.now() - lastDaily));
                return message.reply(`Her 24 Saate Bir Para Alabilirsin`)
            } else {

                db.add(`para_${message.author.id}`, 150)
                message.channel.send(`:tada: Tebrikler! 150 FaviCoin'i Kaptın!`);
            }
            db.set(`günlükbea_${message.guild.id}`, Date.now());
        } else {

            let yavaşmod = 8.64e+7, // 24 Saat
                amount = Math.floor(Math.random() * 1000) + 4000;
            const lastDaily = db.fetch(`günlükbea_${message.guild.id}`)
            if (lastDaily !== null && yavaşmod - (Date.now() - lastDaily) > 0) {
                let timeObj = ms(yavaşmod - (Date.now() - lastDaily));
                return message.reply(`You Can Get Money Every 24 Hours`)
            } else {

                db.add(`para_${message.author.id}`, 150)
                message.channel.send(`:tada: Congrats! You Got 150 Favicoin!`);
            }
            db.set(`günlükbea_${message.guild.id}`, Date.now());




        }
    }
}