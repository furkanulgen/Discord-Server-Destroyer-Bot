console.clear();
const { Client, Intents , MessageEmbed, MessageManager} = require('discord.js');
const client = new Client({ intents: Object.values(Intents.FLAGS).reduce((a, b) => a + b) });

const configuration = require('./configuration');

const control = require('./src/control.js');
const help = require('./src/helpEmbed.js');

client.once('ready', () => {
    console.log("DISCORD API CONNECTION : SUCCESSFUL");
    console.log("RAIDER BOT : READY");
    console.log(`${client.user.username}`);
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    else if(message.author.id === configuration.founderID)
    {
        if(message.content.toLowerCase().startsWith(configuration.prefix + "raid")) control(message);
        if(message.content.toLowerCase().startsWith(configuration.prefix + "help")) help(message);

    }
    else
    {
        message.channel.send("Get Permission From Bot Official .");
    }
});

client.login(configuration.token);