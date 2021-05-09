module.exports = {
    name: "slots",
    description: "Meme Slots",
    usage: "prefix+slots",
    guildOnly: true,
    enabled: true,
    aliases: ["slots"],
    category: "Kullanıcı",
    cooldown: 5,
    permissions: ["VIEW_CHANNEL", "SEND_MESSAGES"],
    favi(client, message, args) {
        const db = require('old-wio.db')
        var para = db.fetch(`para_${message.author.id}`)
        if (para < 50) return message.channel.send("TR; Bu komutu kullanmak için 50 FaviCoin'in olması lazım. EN; To use this command, you must have 50 Favicoins")
        const Discord = require('discord.js')
        let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
        const westraben = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setFooter(client.user.username)
            .setDescription(`<a:wifi:833786002212257874> **${karaliste}** sebebiyle karalisteye alınmışsın! \n Beyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/Pa5aqMhgfN) gelebilirsin!`)
        if (karaliste)
            return message.channel.send(westraben)
        const slots = [':grapes:', ':tangerine:', ':pear:', ':cherries:', ':lemon:'];
        let kontrol = db.fetch(`dil_${message.guild.id}`);
        if (kontrol == "tr") {
            var slot1 = slots[Math.floor(Math.random() * slots.length)];
            var slot2 = slots[Math.floor(Math.random() * slots.length)];
            var slot3 = slots[Math.floor(Math.random() * slots.length)];

            if (slot1 === slot2 && slot1 === slot3) {
                db.add(`para_${message.author.id}`, 100)
                message.channel.send(`
        ${slot1} : ${slot2} : ${slot3}

        Tebrikler! Kazandın ve 100 FaviCoin Kazandın!
        `);
            } else {
                message.channel.send(`
        ${slot1} : ${slot2} : ${slot3}

        Kaybettin
        `);
            }
        } else {
            var slot1 = slots[Math.floor(Math.random() * slots.length)];
            var slot2 = slots[Math.floor(Math.random() * slots.length)];
            var slot3 = slots[Math.floor(Math.random() * slots.length)];

            if (slot1 === slot2 && slot1 === slot3) {
                db.add(`para_${message.author.id}`, 100)

                message.channel.send(`
        ${slot1} : ${slot2} : ${slot3}

        Congratulations, you won and you won 50 "FaviCoin"!
        `);
            } else {
                message.channel.send(`
        ${slot1} : ${slot2} : ${slot3}

        You lost
        `);
            }



        }
    }
}