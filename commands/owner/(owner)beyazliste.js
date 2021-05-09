module.exports = {
    name: "beyazliste",
    description: "Owner Beyaz Liste",
    usage: "prefix+beyazliste @user",
    guildOnly: true,
    enabled: true,
    aliases: ["whitelist"],
    category: "Owner",
    cooldown: 5,
    permissions: ["VIEW_CHANNEL", "SEND_MESSAGES"],
    favi(cclient, message, args) {
        const db = require('old-wio.db')
        const Discord = require('discord.js')
        if (message.author.id !== "356106336146292736") return message.channel.send("To use this command, you must be **Owner** or **general responsible** ")
        let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
        if (!cuser) return message.channel.send(" Bir kullanıcı belirtmelisin!")

        message.channel.send("**" + cuser.tag + "** kullanıcısı başarıyla karalisteden çıkarıldı.")
        const westra = new Discord.MessageEmbed()
            .setColor("#f6ff00")
            .setTimestamp()
            .setDescription(`**${cuser.tag}** kullanıcısı karalisteden çıkarıldı.`)
        cclient.channels.cache.get("834010404224106537").send(westra),
            cuser.send(new Discord.MessageEmbed().setDescription('Artık Beyaz Listedesin!'))
        db.delete(`ckaraliste.${cuser.id}`)


    }
}