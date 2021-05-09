module.exports = {
    name: "cash",
    description: "Economy Cash",
    usage: "prefix+cash",
    guildOnly: true,
    enabled: true,
    aliases: ["money", "para"],
    category: "Kullanıcı",
    cooldown: 5,
    permissions: ["VIEW_CHANNEL", "SEND_MESSAGES"],
    favi(client, message, args) {
        const Discord = require('discord.js')
        const db = require('old-wio.db');
       const kisi = message.mentions.users.first() || message.author;
        let kontrol = db.fetch(`dil_${message.guild.id}`);
        if (kontrol == "tr") {
            const para = db.fetch(`para_${kisi.id}`)
            message.channel.send(new Discord.MessageEmbed().setDescription(`<@${kisi.id}>, Toplam FaviCoin'in __**${para}**__`).setColor('GOLD').setFooter(client.user.username))
        } else {
            const para = db.fetch(`para_${kisi.id}`)
            message.channel.send(new Discord.MessageEmbed().setDescription(`<@${kisi.id}>, Total FaviCoin; __**${para}**__`).setColor('GOLD').setFooter(client.user.username))
        }
    }
}