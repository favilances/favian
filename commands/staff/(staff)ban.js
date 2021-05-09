module.exports = {
    name: "ban",
    description: "Staff Ban",
    usage: "prefix+ban @user reason",
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

            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('<:BanHammer:838857600841023519> **Gerekli Yetkin Yok Dostum**')
            let user = message.mentions.users.first();
            let reason = args.slice(1).join(' ');
            if (message.mentions.users.size < 1) return message.channel.send('<:BanHammer:838857600841023519> **Lütfen Banlamak İstediğiniz Üyeyi Etiketleyin**');
            if (reason.length < 1) return message.channel.send('<:BanHammer:838857600841023519> **Lütfen Sebep Giriniz**');
            if (user.id === message.author.id) return message.channel.send('<:BanHammer:838857600841023519> **Dostum Kendini Banlıyamazsın**');
            user.send(`<:BanHammer:838857600841023519> \`${message.guild.name}\` **Adlı Sunucuda Yaptığınız Olumsuz Davranışlardan Dolayı Yasaklandınız** \n **Yetkilinin Girdiği Sebep:** \`${reason}\``)
            message.guild.members.ban(user);
            const embed2 = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`<:BanHammer:838857600841023519> **<@${user.id}> (-\`${user.tag}\`-)** adlı kullanıcı \`${reason}\` sebebiyle sunucudan yasaklanmıştır!`)
            message.channel.send(embed2)

        } else {
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You Don't Have The Necessary Authority, Man.**")
            let user = message.mentions.users.first();
            let reason = args.slice(1).join(' ');
            if (message.mentions.users.size < 1) return message.channel.send('**Please Label The Member You Want To Ban**');
            if (reason.length < 1) return message.channel.send('**Please Enter Reason**');
            if (user.id === message.author.id) return message.channel.send("**Dude, You Can't Ban Yourself**");
            user.send(`\`${message.guild.name}\` **You are banned for negative behavior on the server named **\n **the reason the authority entered:** \`${reason}\``)
            message.guild.members.ban(user);
            const embed2 = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`**<@${user.id}> (-\`${user.tag}\`-)** named user is banned from the server due to ${reason}!`)
            message.channel.send(embed2)



        }



    }
}