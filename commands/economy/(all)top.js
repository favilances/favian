module.exports = {
        name: "top",
        description: "Economy Top",
        usage: "prefix+günlük-para",
        guildOnly: true,
        enabled: true,
        aliases: ["sıralama"],
        category: "Economy",
        cooldown: 5,
        permissions: ["VIEW_CHANNEL", "SEND_MESSAGES"],
        favi(client, message, args) {
            const db = require('old-wio.db')
            const Discord = require('discord.js')
            let kontrol = db.fetch(`dil_${message.guild.id}`);
            if (kontrol == "tr") {
                const sorted = message.guild.members.cache.filter(m => db.has(`para_${message.author.id}`) && !m.user.bot).array().sort((a, b) => {
                    return (db.fetch(`para_${message.author.id}`) || 0) - (db.fetch(`para_${message.author.id}`) || 0);
                });
                const top10 = sorted.splice(0, args[0] || 10);
                var sira = 1;
                const map = top10.map(s => `• ${sira++}. **${s.user}** | ${db.fetch(`para_${message.author.id}`)||0} FaviCoin :coin: `).join('\n')
          const embed = new Discord.MessageEmbed()
          .setAuthor(`Favian | İlk 10`)
          .setColor('GOLD')
          .setDescription(map||`• Burada gösterilecek birşey yok.`)
          return message.channel.send(embed);
        } else {

            const sorted = message.guild.members.cache.filter(m => db.has(`para_${message.author.id}`) && !m.user.bot).array().sort((a, b) => {
                return (db.fetch(`para_${message.author.id}`) || 0) - (db.fetch(`para_${message.author.id}`) || 0);
            });
            const top10 = sorted.splice(0, args[0] || 10);
            var sira = 1;
            const map = top10.map(s => `• ${sira++}. **${s.user}** | ${db.fetch(`para_${message.author.id}`)||0} FaviCoin :coin: `).join('\n')
          const embed = new Discord.MessageEmbed()
          .setAuthor(`Favian | Top 10`)
          .setColor('GOLD')
          .setDescription(map||`• There is nothing to be shown here.`)
          return message.channel.send(embed);






        }
    }
}