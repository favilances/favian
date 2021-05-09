module.exports = {
    name: "eject",
    description: "Meme Eject",
    usage: "prefix+ejecet",
    guildOnly: true,
    enabled: true,
    aliases: [],
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
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let Color = "black|blue|brown|cyan|darkgreen|lime|orange|pink|purple|red|white|yellow".split("|"),
            Imposter = [true, false];
        Color = Color[Math.floor(Math.random() * Color.length)], Imposter = Imposter[Math.floor(Math.random() * Imposter.length)];

        const Embed = new Discord.MessageEmbed()
            .setColor("#E70000")
            .setTitle(`${Member.user.username} Is ${Imposter ? "The Imposter!" : "Not An Imposter!"}`)
            .setImage(encodeURI(`https://vacefron.nl/api/ejected?name=${Member.user.username}&impostor=${Imposter}&crewmate=${Color}`))
            .setTimestamp();

        return message.channel.send(Embed);
    }
}