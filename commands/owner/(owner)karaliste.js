module.exports = {
    name: "karaliste",
    description: "Owner Karaliste",
    usage: "prefix+karaliste @user sebep",
    guildOnly: true,
    enabled: true,
    aliases: ["blacklist"],
    category: "Owner",
    cooldown: 5,
    permissions: ["VIEW_CHANNEL", "SEND_MESSAGES"],
    favi(cclient, message, args) {
        const db = require('old-wio.db')
        const Discord = require('discord.js')

        if (message.author.id !== "356106336146292736") return message.channel.send("To use this command, you must be **Owner** or **general responsible** ")

        let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
        if (!cuser) return message.channel.send("Bir kullanıcı belirtmelisin!")
        let csebep = args.slice(1).join(' ')
        if (!csebep) return message.channel.send("Bir sebep belirtmelisin!")

        message.channel.send(" **" + cuser.tag + "** kullanıcısı **" + csebep + "** sebebinden başarıyla karalisteye alındı.")
        const westra = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .setDescription(`**${cuser.tag}** kullanıcısı **${csebep}** sebebinden karalisteye alındı.`)
        cclient.channels.cache.get("834010404224106537").send(westra)
        cuser.send(new Discord.MessageEmbed().setDescription(`**Kara Listeye Alındınız!** Kara Liste Sebebi; ${csebep} Kara Listeye Alan; <@${message.author.id}>`).setColor("RED"))
        db.set(`ckaraliste.${cuser.id}`, csebep)
    }
}