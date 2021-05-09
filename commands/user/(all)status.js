const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: "status",
    description: "User Status",
    usage: "prefix+status",
    guildOnly: true,
    enabled: true,
    aliases: ["istatistik", "i"],
    category: "Kullanıcı",
    cooldown: 5,
    permissions: ["VIEW_CHANNEL", "SEND_MESSAGES"],
    favi(client, message, args) {
        const Discord = require('discord.js')
        const db = require('old-wio.db')
        const os = require('os')
        const moment = require('moment')
        require("moment-duration-format")
        let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
        const westraben = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setFooter(client.user.username)
            .setDescription(`<a:wifi:833786002212257874> **${karaliste}** sebebiyle karalisteye alınmışsın! \n Beyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/Pa5aqMhgfN) gelebilirsin!`)
        if (karaliste)
            return message.channel.send(westraben)
        const plasmiczaman = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

        let kontrol = db.fetch(`dil_${message.guild.id}`);
        let datadurum = db.fetch(`datadurum`)

        if (kontrol == "tr") {
            const yardım = new Discord.MessageEmbed()
                .setColor("GOLD")
                .addField("**Sunucu Sayısı:**", `\`\`\`${client.guilds.cache.size} Sunucu\`\`\``, true)
                .addField("**Kullanıcı Sayısı:**", `\`\`\`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Kullanıcı\`\`\``, true)
                .addField("**Komut Sayısı:**", `\`\`\`${client.commands.size} Komut\`\`\``, true)
                .addField("**Ping:**", `\`\`\`${client.ws.ping}ms\`\`\``, true)
                .addField("**Data Durumu:**", `\`\`\`${datadurum}\`\`\``, true)
                .setThumbnail(message.author.displayAvatarURL({ size: 4096, dynamic: true }))
                .setImage(client.ayarlar.resim)
            message.channel.send(yardım)

        } else {
            const yardım = new Discord.MessageEmbed()
                .setColor("GOLD")
                .addField("**Number Of Servers:**", `\`\`\`${client.guilds.cache.size} Servers\`\`\``, true)
                .addField("**Number Of Users:**", `\`\`\`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Users\`\`\``, true)
                .addField("**Number Of Commands:**", `\`\`\`${client.commands.size} Commands\`\`\``, true)
                .addField("**Ping:**", `\`\`\`${client.ws.ping}ms\`\`\``, true)
                .addField("**Data State:**", `\`\`\`${datadurum}\`\`\``, true)
                .setThumbnail(message.author.displayAvatarURL({ size: 4096, dynamic: true }))
                .setImage(client.ayarlar.resim)
            message.channel.send(yardım)



        }
    }
}