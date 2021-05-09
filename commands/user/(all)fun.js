const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: "fun-gif",
    description: "Meme Fun",
    usage: "prefix+fun",
    guildOnly: true,
    enabled: true,
    aliases: ["eğlence-gif"],
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
                "https://media1.giphy.com/media/rdma0nDFZMR32/giphy.gif?cid=878b7d3e2vvihy0g6v3la9iq51079mp4jyp0oa4xq8uo5hig&rid=giphy.gif",
                "https://media2.giphy.com/media/kDZMoj30w3OswLR08v/200.gif",
                "https://media0.giphy.com/media/3oFzmkCSEpeDJFi5IA/200.gif",
                "https://steamuserimages-a.akamaihd.net/ugc/529543646251718053/D0EB83D2E4EFD25216800AEAE7530CE7DD835788/"


            ]
            var maze = gif[Math.floor(Math.random() * (gif.length))]
            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
            const embed = new Discord.MessageEmbed()
                .setDescription(`Eğlence Gif`)
                .setImage(`${maze}`)
                .setColor('RANDOM')
            return message.channel.send(embed);

        } else {
            var gif = [
                "https://media1.giphy.com/media/rdma0nDFZMR32/giphy.gif?cid=878b7d3e2vvihy0g6v3la9iq51079mp4jyp0oa4xq8uo5hig&rid=giphy.gif",
                "https://media2.giphy.com/media/kDZMoj30w3OswLR08v/200.gif",
                "https://media0.giphy.com/media/3oFzmkCSEpeDJFi5IA/200.gif",
                "https://steamuserimages-a.akamaihd.net/ugc/529543646251718053/D0EB83D2E4EFD25216800AEAE7530CE7DD835788/"


            ]
            var maze = gif[Math.floor(Math.random() * (gif.length))]
            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
            const embed = new Discord.MessageEmbed()
                .setDescription(`Fun Gif`)
                .setImage(`${maze}`)
                .setColor('RANDOM')
            return message.channel.send(embed);



        }
    }
}