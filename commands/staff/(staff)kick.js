module.exports = {
    name: "kick",
    description: "Staff Kick",
    usage: "prefix+kick @user reason",
    guildOnly: true,
    enabled: true,
    aliases: [],
    category: "Staff",
    cooldown: 5,
    permissions: ["VIEW_CHANNEL", "SEND_MESSAGES"],
    favi(client, message, args) {
        const db = require('old-wio.db')
        const Discord = require('discord.js')
        let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
        const westraben = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setFooter(client.user.username)
            .setDescription(`<a:wifi:833786002212257874> **${karaliste}** sebebiyle karalisteye alınmışsın! \n Beyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/Pa5aqMhgfN) gelebilirsin!`)
        if (karaliste)
            return message.channel.send(westraben)
        let kontrol = db.fetch(`dil_${message.guild.id}`);
        if (kontrol == "tr") {

            if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('**Gerekli Yetkin Yok Dostum**')
            let user = message.mentions.users.first();
            let reason = args.slice(1).join(' ');
            if (message.mentions.users.size < 1) return message.channel.send('**Lütfen Kicklemek İstediğiniz Üyeyi Etiketleyin**');
            if (reason.length < 1) return message.channel.send('**Lütfen Sebep Giriniz**');
            if (user.id === message.author.id) return message.channel.send('**Dostum Kendini Atamazsın**');
            user.send(`\`${message.guild.name}\` **Adlı Sunucuda Yaptığınız Olumsuz Davranışlardan Dolayı Atıldınız** \n **Yetkilinin Girdiği Sebep:** \`${reason}\``)
            message.guild.member(user).kick();
            const embed2 = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`**<@${user.id}> (-\`${user.tag}\`-)** adlı kullanıcı \`${reason}\` sebebiyle sunucudan atılmıştır!`)
            message.channel.send(embed2)

        } else {
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You Don't Have The Necessary Authority, Man.**")
            let user = message.mentions.users.first();
            let reason = args.slice(1).join(' ');
            if (message.mentions.users.size < 1) return message.channel.send('**Please Tag The Member You Want To Discard**');
            if (reason.length < 1) return message.channel.send('**Please Enter Reason**');
            if (user.id === message.author.id) return message.channel.send("**Dude, you can't throw yourself away**");
            user.send(`\`${message.guild.name}\` **** \n **You were expelled for negative behavior on the server named** \n **the reason the official entered:** \`${reason}\``)
            message.guild.member(user).kick();
            const embed2 = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`**<@${user.id}> (- \`${user.tag}\` -) * * user \`${reason}\` was kicked out of the server due to!`)
            message.channel.send(embed2)



        }



    }
}