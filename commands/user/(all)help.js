module.exports = {
    name: "yardım",
    description: "Help Menü",
    usage: "prefix+yardım",
    guildOnly: true,
    enabled: true,
    aliases: ["help"],
    category: "Kullanıcı",
    cooldown: 5,
    permissions: ["VIEW_CHANNEL", "SEND_MESSAGES"],
    favi(client, message, args) {
        const Discord = require('discord.js')
        const db = require('old-wio.db')
        const dil = db.fetch(`dil_${message.guild.id}`)
        if (!dil) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Merhaba**, ${message.author} **Favian** botumuzu kullanabilmek için dil seçmeniz gerekmektedir. \n \n **Dil Seçmek için** -dil tr veya -dil en yazmanız gerekmektedir. \n \n tr: Türkçe \n en: İngilizce \n \n \n  ** Hello**, ${message.author} **Favian** you must select a language to use our bot. \n \n **to select the language you need to type** \n Example: -lang en \n \n tr: Turkish \n en: Engilish`).setColor("GREEN"))
        let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
        const westraben = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setFooter(client.user.username)
            .setDescription(`<a:wifi:833786002212257874> **${karaliste}** sebebiyle karalisteye alınmışsın! \n Beyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/Pa5aqMhgfN) gelebilirsin!`)
        if (karaliste)
            return message.channel.send(westraben)
        let kontrol = db.fetch(`dil_${message.guild.id}`);
        if (kontrol == "tr") {
            let p = args[0];  
            let onlycode = args.slice(0).join(' ');
            const yardım = new Discord.MessageEmbed()
                .setColor('GOLD')
                .setImage(client.ayarlar.resim)
                .setFooter(client.user.username)
                .setThumbnail(message.author.displayAvatarURL({ size: 4096, dynamic: true }))
                .setDescription(`
           > Prefix; \`${client.ayarlar.prefix}\`

           <:ppfunny:833328114666700821> **Eğlence;** (\`10\`);
           > \`aykutelmas\`,\`vine\`,\`hack\`,\`slots\`,\`eject\`,\`marvel\`,\`eğlence-gif\`,\`kral\`

           <:staff:804760617890086932> **Yetkili;** (\`3\`);
           > \`dil\`,\`ban\`,\`kick\`

           <:users:806474337136803860>  **Kullanıcı;** (\`2\`);
           > \`istatistik\`,\`davet\`

          <:ppfunny:833328114666700821>  **Together;** (\`1\`);
           > \`oynat\`

           :coin:  **Ekonomi;** (\`4\`);
           > \`para\`,\`dilen\`,\`günlük\`,\`ara\`

           <:favian_dev:822138136288034826> **Geliştirici;** (\`3\`);
           > \`eval\`,\`karaliste\`,\`beyazliste\`
    `)

            message.channel.send(yardım)
        } else {
            let p = args[0];
            let onlycode = args.slice(0).join(' ');
            const yardım = new Discord.MessageEmbed()
                .setColor('GOLD')
                .setImage(client.ayarlar.resim)
                .setFooter(client.user.username)
                .setThumbnail(message.author.displayAvatarURL({ size: 4096, dynamic: true }))
                .setDescription(`
       > Prefix; \`${client.ayarlar.prefix}\`

       <:ppfunny:833328114666700821> **Fun;** (\`10\`);
       > \`aykutelmas\`,\`vine\`,\`hack\`,\`slots\`,\`eject\`,\`marvel\`,\`fun-gif\`,\`king\`

       <:staff:804760617890086932> **Staff;** (\`3\`);
       > \`lang\`,\`ban\`,\`kick\`

       <:users:806474337136803860>  **User;** (\`2\`);
       > \`status\`,\`invite\`

      <:ppfunny:833328114666700821>  **Together;** (\`1\`);
      > \`play\`


       :coin:  **Economy;** (\`4\`);
       > \`cash\`,\`daily\`,\`beggary\`,\`call\`

       <:favian_dev:822138136288034826> **Developer;** (\`3\`);
       > \`eval\`,\`whitelist\`,\`blacklist\`
`)

            message.channel.send(yardım)

        }
    }
}