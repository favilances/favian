module.exports = {
    name: "dilen",
    description: "Economy Dilen",
    usage: "prefix+dilen",
    guildOnly: true,
    enabled: true,
    aliases: ["beggary"],
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
            let miktarsonuç = (bt.rastgele("500", "pozitif"))
            var sebep = ["dilendi", "favi'den para dilendi", "Bill Gates'den para dilendi", "Acun Ilıcalı'dan para dilendi", "kimseden para dilenmedi", "şoförden para dilendi", "zengin birinden para dilendi", "çöpçüden para dilendi"]
            var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
            db.add(`para_${message.author.id}`, miktarsonuç)
            const embed = new discord.MessageEmbed()
                .setDescription(`${message.author.username} **${sebepsonuç}** ve **${miktarsonuç}**  :coin:  topladı!`)
                .setColor("GREEN")
                .setFooter('Favian')
            return message.channel.send(embed)
        } else {
            let miktarsonuç = (bt.rastgele("500", "pozitif"))
            var sebep = ["beg ", "Favi begged for money", "Bill Gates begged for money", "Acun Ilicali begged for money", "he didn't ask anyone for money", "the driver begged for money", "he begged a rich man for money", "money begged the garbage man"]
            var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
            db.add(`para_${message.author.id}`, miktarsonuç)
            const embed = new discord.MessageEmbed()
                .setDescription(`${message.author.username} **${sebepsonuç}** ve **${miktarsonuç}**  :coin:  he collected it!`)
                .setColor("GREEN")
                .setFooter('Favian')
            return message.channel.send(embed)

        }
    }
}