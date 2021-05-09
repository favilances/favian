const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: "davet",
    description: "User İnvite",
    usage: "prefix+davet",
    guildOnly: true,
    enabled: true,
    aliases: ["invite", "davet"],
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
        let datadurum = db.fetch(`datadurum`)

        if (kontrol == "tr") {
            const yardım = new Discord.MessageEmbed()
                .setTitle("Favian")
                .setDescription("> **Merhaba, Favian botumuzu denemeye ne dersiniz?** \n \n[Destek Sunucusu](https://discord.gg/NMthrEyJkb) - [Davet Et](https://discord.com/oauth2/authorize?client_id=792773585387257917&permissions=805314622&scope=bot%20applications.commands)")
                .setColor("GOLD")
                .setImage(client.ayarlar.resim)
            message.channel.send(yardım)

        } else {
            const yardım = new Discord.MessageEmbed()
                .setTitle("Favian")
                .setDescription("**Hi, How about we try our Favian bot?** \n \n [Support Server](https://discord.gg/NMthrEyJkb) - [İnvite The Bot](https://discord.com/oauth2/authorize?client_id=792773585387257917&permissions=805314622&scope=bot%20applications.commands)")
                .setColor("GOLD")
                .setImage(client.ayarlar.resim)
            message.channel.send(yardım)



        }
    }
}