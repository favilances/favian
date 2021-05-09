const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: "hack",
    description: "Meme Hack",
    usage: "prefix+hack",
    guildOnly: true,
    enabled: true,
    aliases: ["hacked"],
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
                "https://media1.giphy.com/media/YQitE4YNQNahy/giphy-downsized-large.gif",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYDHND0DE1YqCRCNQsrwDqaMPNnW868ymMQ&usqp=CAU",
                "https://media1.giphy.com/media/26gQt4FJ6gd6DUGFW/giphy.gif",
                "https://i.pinimg.com/originals/7f/89/42/7f89421f894717c5a59647627884d4ff.gif"


            ]
            var maze = gif[Math.floor(Math.random() * (gif.length))]
            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
            const embed = new Discord.MessageEmbed()
                .setDescription(`<@${message.author.id}> ${user}'adlı kişiyi Hackledi!`)
                .setImage(`${maze}`)
                .setColor('RANDOM')
            return message.channel.send(embed);

        } else {
            var gif = [
                "https://media1.giphy.com/media/YQitE4YNQNahy/giphy-downsized-large.gif",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYDHND0DE1YqCRCNQsrwDqaMPNnW868ymMQ&usqp=CAU",
                "https://media1.giphy.com/media/26gQt4FJ6gd6DUGFW/giphy.gif",
                "https://i.pinimg.com/originals/7f/89/42/7f89421f894717c5a59647627884d4ff.gif"


            ]
            var maze = gif[Math.floor(Math.random() * (gif.length))]
            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
            const embed = new Discord.MessageEmbed()
                .setDescription(`Person named "${user}" hacked`)
                .setImage(`${maze}`)
                .setColor('RANDOM')
            return message.channel.send(embed);



        }
    }
}