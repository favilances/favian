module.exports = {
    name: "aykutelmas",
    description: "Meme Aykut Elmas",
    usage: "prefix+aykutelmas",
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
        var gif = [
            "https://i.makeagif.com/media/7-31-2015/RoNHKS.gif",
            "https://i.pinimg.com/originals/f2/b0/b0/f2b0b00d41ffc5c41df8c52c85cbfcb8.gif",
            "https://media.tenor.com/images/8bde5835cd3803651aec555dd8953278/tenor.gif",
            "https://64.media.tumblr.com/007f53b39119df0e029e84ce10c03dfa/tumblr_inline_pcdeh9VhAS1tarbgv_540.gifv",
            "https://media.tenor.com/images/6db30097ba16c86402504d4103203c91/tenor.gif",
            "https://64.media.tumblr.com/28b0ce1bf66578229d875506f0b4ffce/tumblr_pgpeioFGez1rh5g90o8_250.gifv",
            "https://thumbs.gfycat.com/SpotlessColorfulGemsbok-size_restricted.gif",
            "http://38.media.tumblr.com/af283e7764b42045c65802e6ee4c5894/tumblr_n3vbymEWct1sqctyno4_250.gif",
            "https://media4.giphy.com/media/cJXa8LqaoOsX6eralF/200.gif",
            "https://i.hizliresim.com/OTWN6j.gif",
            "https://64.media.tumblr.com/7be8dee10dc6d4715d1d2d80f55b0df9/tumblr_n3vi4dehAj1s90udzo5_250.gifv",
            "https://i.pinimg.com/originals/f2/b0/b0/f2b0b00d41ffc5c41df8c52c85cbfcb8.gif",
            "https://64.media.tumblr.com/0a98b1815e4e84098fff7bfc45c3ef68/tumblr_pgpeioFGez1rh5g90o7_250.gifv"
        ]
        var maze = gif[Math.floor(Math.random() * (gif.length))]
        const vrs = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(`${maze}`)
        return message.channel.send(vrs);
    }
}