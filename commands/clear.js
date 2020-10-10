const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to use this command!');

    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!') }

    if (parseInt(args[0]) > 50) {
        return message.reply('You can only delete 50 messages at a time!')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`)
}

module.exports.config = {
    name: "clear",
    description: "",
    usage: "-clear",
    accessableby: "Members",
    aliases: ['c', 'purge']
}
