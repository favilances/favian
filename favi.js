const Discord = require("discord.js")
const fetch = require("node-fetch");
const fs = require("fs");
const client = new Discord.Client({
    disableMentions: "everyone",
    ws: {
        intents: ["GUILD_MEMBERS", "GUILD_WEBHOOKS", "GUILD_VOICE_STATES", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING", "GUILDS", "GUILD_BANS", "GUILD_EMOJIS", "GUILD_INTEGRATIONS", "GUILD_INVITES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING"]
    },
    autoReconnect: true,
    restTimeOffset: 0,
    messageEditHistoryMaxSize: 200,
    messageCacheMaxSize: 200,
    messageSweepInterval: 180,
    messageCacheLifetime: 180,
    partials: ['MESSAGE', 'REACTION', 'CHANNEL']
})
const db = require('old-wio.db')
const favi = new Discord.Client()
client.db = db;
client.ayarlar = {
   token: "TOKEN",
    prefix: "-",
    sahip: ["356106336146292736"],
    embedRenk: "",
    embedFooter: "",
    resim: "https://cdn.discordapp.com/attachments/444494700167299072/831888002904621091/maze.png"
}

client.on("ready", () => {
    client.user.setActivity(`🍁 Maze Development`, { type: 'COMPETING' })
    console.log("------------[Favian]------------")
    console.log("Kullanıcı Adım: " + client.user.username)
    console.log("Sunucu Sayısı: " + client.guilds.cache.size)
    console.log("Kullanıcı Sayısı: " + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString())
    console.log("------------[Favian]------------")
})

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        console.log(`[Yüklenen Komut]: ${command.name}`)
        client.commands.set(command.name, command)
        if (command.aliases) {
            command.aliases.forEach(alias => {
                client.aliases.set(alias, command.name);
            });
        }
    }
}

client.on("message", (message) => {
    let prefix = client.ayarlar.prefix;
    if (message.author.bot || message.channel.type === "dm" || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

    let cmd;
    if (client.commands.has(command)) {
        cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
        cmd = client.commands.find(sa => sa.aliases && sa.aliases.includes(command));
    }

    if (cmd) { cmd.favi(client, message, args, prefix) }
})

client.login(client.ayarlar.token)


client.on("guildCreate", async function(guild, member) {

const owner = client.users.cache.get(guild.ownerID)

const kanal = "834010401787740180" 

const maze = new Discord.MessageEmbed()

.setTitle(`Yeni bir sunucuya eklendim`)

.setColor("GREEN")

.addField(`Sunucu Adı`, guild.name)

.addField(`Sunucu Sahibi`, owner.username + "#" +owner.discriminator)

.addField(`Sunucu Üye Sayısı`, guild.memberCount)

client.channels.cache.get(kanal).send({embed: maze}).catch(err => console.log("Kanala mesaj atamıyorum!"))

})

//Atıldım

client.on("guildDelete", async function(guild) {

const owner = client.users.cache.get(guild.ownerID)

const kanal = "834010401787740180" 

const maze = new Discord.MessageEmbed()

.setTitle(`Bir sunucudan atıldım`)

.setColor("RED")

.addField(`Sunucu Adı`, guild.name)

.addField(`Sunucu Sahibi`, owner.username + "#" + owner.discriminator)

.addField(`Sunucu Üye Sayısı`, guild.memberCount)

client.channels.cache.get(kanal).send({embed: maze}).catch(err => console.log("Kanala mesaj atamıyorum!"))

})

require("dotenv").config();

const ACTIVITIES = {
    "poker": {
        id: "755827207812677713",
        name: "Poker Night"
    },
    "betrayal": {
        id: "773336526917861400",
        name: "Betrayal.io"
    },
    "youtube": {
        id: "755600276941176913",
        name: "YouTube Together"
    },
    "fishington": {
        id: "814288819477020702",
        name: "Fishington.io"
    }
};
const PREFIX = client.ayarlar.prefix

client.on("message", async message => {
            if (message.author.bot || !message.guild) return;
            if (message.content.indexOf(PREFIX) !== 0) return;

            const args = message.content.slice(PREFIX.length).trim().split(" ");
            const cmd = args.shift().toLowerCase();

            if (cmd === "ping") return message.channel.send(`Pong! \`${client.ws.ping}ms\``);

            if (cmd === "yttogether") {
                const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
                if (!channel || channel.type !== "voice") return message.channel.send("Geçersiz kanal belirtildi!");
                if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("CREATE_INSTANT_INVITE iznine ihtiyacım var");

                fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                        method: "POST",
                        body: JSON.stringify({
                            max_age: 86400,
                            max_uses: 0,
                            target_application_id: "830427926482255902", // youtube together
                            target_type: 2,
                            temporary: false,
                            validate: null
                        }),
                        headers: {
                            "Authorization": `Bot ${client.token}`,
                            "Content-Type": "application/json"
                        }
                    })
                    .then(res => res.json())
                    .then(invite => {
                        if (invite.error || !invite.code) return message.channel.send("YouTube Together başlatılamadı!");
                        message.channel.send(new Discord.MessageEmbed().setColor("GOLD").setDescription(`**Favian** 'i Başlatmak İçin : [TIKLA](<https://discord.gg/${invite.code}>)`));
                    })
                    .catch(e => {
                        message.channel.send("**Favian** başlatılamadı!");
                    })
            }




            // or use this
            if (cmd === "oynat") {
                const channel = message.guild.channels.cache.get(args[0]);
                if (!channel || channel.type !== "voice") return message.channel.send(new Discord.MessageEmbed().setColor('GOLD').setFooter('Favian').setDescription("**Şu Şekillerde Kullanın; \n -oynat KanalİD youtube | Youtube Üzerinden Video Oynatırsınız! \n -oynat KanalİD poker | Poker Oyunu Oynarsınız! \n -oynat KanalİD betrayal | Betrayal Oyunu Oynarsınız! \n -oynat KanalİD fishington | Fishington Oyunu Oynarsınız!**"));
                if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("CREATE_INSTANT_INVITE iznine ihtiyacım var");
                const activity = ACTIVITIES[args[1] ? args[1].toLowerCase() : null];
                if (!activity) return message.channel.send(`Doğru formatlar: \n${Object.keys(ACTIVITIES).map(m => `- **${PREFIX}activity <Channel_ID> ${m}**`).join("\n")}`);

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: activity.id,
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send(`Başlatılamadı **${activity.name}**!`);
              message.channel.send(new Discord.MessageEmbed().setColor("GOLD").setDescription(`**Favian 'ı Başlatmak İçin :** [TIKLA](<https://discord.gg/${invite.code}>)`));
            })
            .catch(e => {
                message.channel.send(`Başlatılamadı **${activity.name}**!`);
            })
    }
              if (cmd === "play") {
                const channel = message.guild.channels.cache.get(args[0]);
                if (!channel || channel.type !== "voice") return message.channel.send(new Discord.MessageEmbed().setColor('GOLD').setFooter('Favian').setDescription("**Use In The Following Ways; \n -play ChannelID youtube | Play Videos Via Youtube! \n -play ChannelID poker | You Play Poker! \n -play ChannelID betrayal | You Play Betrayal! \n -play ChannelID fishington | You Play Fishington!**"));
                if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("CREATE_INSTANT_INVITE iznine ihtiyacım var");
                const activity = ACTIVITIES[args[1] ? args[1].toLowerCase() : null];
                if (!activity) return message.channel.send(`Doğru formatlar: \n${Object.keys(ACTIVITIES).map(m => `- **${PREFIX}activity <Channel_ID> ${m}**`).join("\n")}`);

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: activity.id,
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send(`Could not start**${activity.name}**!`);
                message.channel.send(`Click Here To Start! **${activity.name}** **${channel.name}**: <https://discord.gg/${invite.code}>`);
            })
            .catch(e => {
                message.channel.send(`Could not start **${activity.name}**!`);
            })
    }


});

          
