const whiteList = require('./whiteList');
const raid = require('./raid');

module.exports = (message) =>
{
    if (message.guild && whiteList.WhiteListID.some(wlID => message.guildId == wlID))
    {
        message.channel.send("WHITELIST");
    }
    else
    {
        raid(message);
    }
}