module.exports = {
    name: "lang",
    description: "Dil Seçim",
    usage: "prefix+lang",
    guildOnly: true,
    enabled: true,
    aliases: ["dil"],
    category: "staff",
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
        const yetkiembed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('___**HATA**___')
            .setDescription('**Yönetici** Yetkin Yok! - **ADMINISTRATOR** - You Have No Authority! ')
            .setImage('https://s4.gifyu.com/images/yonetic.gif')
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(yetkiembed);
        let kontrol = db.fetch(`dil_${message.guild.id}`);
        if (kontrol == "tr") {
            let dil = args[0];
            if (!dil) {
                message.channel.send(new Discord.MessageEmbed().setDescription("Dil Belirt'in \n \n __**TR**__ veya __**EN**__").setColor("RED").setFooter(client.user.username));
                return;
            }
            if (dil === "en") {
                db.set(`dil_${message.guild.id}`, dil);
                message.channel.send(new Discord.MessageEmbed().setDescription(`New Language Set To \`${dil}\``).setColor("GREEN").setFooter(client.user.username));
            } else if (dil === "TR_tr") {
                db.set(`dil_${message.guild.id}`, dil);
                message.channel.send(new Discord.MessageEmbed().setDescription(`Yeni dil __${dil}__ olarak ayarlandı!`).setColor("GREEN").setFooter(client.user.username));
            } else {
                message.channel.send("__Error! Recognized languages are: `tr`, `en`__");
                return;
            }
        } else {
            let dil = args[0];
            if (!dil) {
                message.channel.send(
                    "__Please specify a language! Languages: `tr`, `en`__"
                );
                return;
            }
            if (dil === "en") {
                db.set(`dil_${message.guild.id}`, dil);
                message.channel.send(`__New language set to \`${dil}\`!__`);
            } else if (dil === "tr") {
                db.set(`dil_${message.guild.id}`, dil);
                message.channel.send(new Discord.MessageEmbed().setDescription(`**Yeni Dil \`${dil}\` olarak ayarlandı!**`));
            } else {
                message.channel.send(
                    "__Incorrect language! Languages: `tr`, `en`__"
                );
                return;
            }
        }
    }
}