module.exports = {
    name: "update",
    description: "Owner update",
    usage: "prefix+karaliste @user sebep",
    guildOnly: true,
    enabled: true,
    aliases: ["update"],
    category: "Owner",
    cooldown: 5,
    permissions: ["VIEW_CHANNEL", "SEND_MESSAGES"],
    favi(client, message, args) {
        const db = require('old-wio.db')
        const Discord = require('discord.js')

        if (message.author.id !== "356106336146292736") return message.channel.send("To use this command, you must be **Owner** or **general responsible** ")

        message.channel.send(new Discord.MessageEmbed().setImage(client.ayarlar.resim).setAuthor("Favian", client.user.avatarURL()).setDescription(`
        ⇰ **Crayrone** Update - v1.2 
        > ⇰ Sorunlar Çözüldü!
        __**Ekleneneler**__
        > ⇰ Guard (\` 
        • Rol silme koruma,
        • Rol yöneticilik koruma,
        • Sağ tık yasaklama koruma,
        • Kanal koruma & Kanal Geri Açma,
        • Emoji koruma,
        • Bot Koruma
        \`)
        > ⇰ Yardım Menüsü(\`
        • Yardım Menüleri Güncellendi
        \`)
        
        
        `).setColor('GOLD').setThumbnail('https://cdn.discordapp.com/avatars/720015146507960341/2414561f305b43b92f3932fcbe119123.webp?size=4096'))
    }
}