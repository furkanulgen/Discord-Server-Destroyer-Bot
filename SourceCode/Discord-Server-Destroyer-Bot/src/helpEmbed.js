const {MessageEmbed} = require('discord.js');

module.exports = (message) =>
{
    const helpEmbed = new MessageEmbed()
    .setAuthor({name: `${message.author.tag} I am ready. Are you Ready ?` , iconURL: `${message.author.avatarURL()}`})
    .setDescription("'+raid'+ 'username' + 'attack power [30 -250] default 30' \nExaple : ```+raid narr0w 30\n+raid gg 150\n+raid```")
    message.channel.send({embeds : [helpEmbed]});
}