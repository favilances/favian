const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: "king",
    description: "Meme Kral",
    usage: "prefix+king",
    guildOnly: true,
    enabled: true,
    aliases: ["kral"],
    category: "Kullanıcı",
    cooldown: 5,
    permissions: ["VIEW_CHANNEL", "SEND_MESSAGES"],
    favi(client, message, args) {
        const Discord = require('discord.js')
        const db = require('old-wio.db')
        let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
        const westraben = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setFooter(client.user.username)
            .setDescription(`<a:wifi:833786002212257874> **${karaliste}** sebebiyle karalisteye alınmışsın! \n Beyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/Pa5aqMhgfN) gelebilirsin!`)
        if (karaliste)
            return message.channel.send(westraben)

        let kontrol = db.fetch(`dil_${message.guild.id}`);
        if (kontrol == "tr") {

            var gif = [
                "https://media.tenor.com/images/86b5a199844ea65ff3d3b9a129df6258/tenor.gif",
                "https://i.pinimg.com/originals/ec/6b/91/ec6b91e28a0607eefc9929db53ab720b.gif",
                "https://media2.giphy.com/media/3o6ozwz655wzNvwHw4/source.gif",
                "https://i.gifer.com/bdg.gif"


            ]
            var maze = gif[Math.floor(Math.random() * (gif.length))]
            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
            const embed = new Discord.MessageEmbed()
                .setDescription(`Aynen Kardeşim Kralsın!`)
                .setImage(`${maze}`)
                .setColor('RANDOM')
            return message.channel.send(embed);

        } else {
            var gif = [
                "https://media.tenor.com/images/86b5a199844ea65ff3d3b9a129df6258/tenor.gif",
                "https://i.pinimg.com/originals/ec/6b/91/ec6b91e28a0607eefc9929db53ab720b.gif",
                "https://media2.giphy.com/media/3o6ozwz655wzNvwHw4/source.gif",
                "https://i.gifer.com/bdg.gif"


            ]
            var maze = gif[Math.floor(Math.random() * (gif.length))]
            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
            const embed = new Discord.MessageEmbed()
                .setDescription(`Just Like My Brother, You're The King`)
                .setImage(`${maze}`)
                .setColor('RANDOM')
            return message.channel.send(embed);



        }
    }
}