module.exports = {
    name: "ara",
    description: "Economy ara",
    usage: "prefix+ara",
    guildOnly: true,
    enabled: true,
    aliases: ["call"],
    category: "Economy",
    cooldown: 5,
    permissions: ["VIEW_CHANNEL", "SEND_MESSAGES"],
    favi(client, message, args) {
        const bt = require('best-tools');
        const Discord = require('discord.js');
        const db = require('old-wio.db');
        const discord = require('discord.js')
        const ms = require('ms')
        let kontrol = db.fetch(`dil_${message.guild.id}`);
        if (kontrol == "tr") {
            db.add(`para_${message.author.id}`, 30)
            let miktarsonuç = (bt.rastgele("500", "pozitif"))
            var sebep = ["Enes Batur'u aradı", "favi'yi aradı", "Orkun Işıtmak'ı aradı", "Adal'ı aradı", "kimseyi aramadı", "Maze ekibini aradı", "zengin birini aradı", "kimi arayacağını düşündü", "çöpü aradı"]
            var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
            db.add(`para_${message.author.id}`, miktarsonuç)
            const embed = new discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription(`${message.author.username} **${sebepsonuç}** ve **${miktarsonuç}**  :coin:  kazandı!`)
            return message.channel.send(embed)
        } else {
            db.add(`para_${message.author.id}`, 30)
            let miktarsonuç = (bt.rastgele("500", "pozitif"))
            var sebep = ["He called Bill Gates.", "he called Favi", "he called Ronaldo", "he called Messi", "he didn't call anyone.", "Maze called his team", "he called a rich man.", "he thought about who to call", "he searched the trash"]
            var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
            db.add(`para_${message.author.id}`, miktarsonuç)
            const embed = new discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription(`${message.author.username} **${sebepsonuç}** called and won **${miktarsonuç}**  :coin:`)
            return message.channel.send(embed)

        }
    }
}