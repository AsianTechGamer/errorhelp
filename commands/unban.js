const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    let toBan = await bot.users.fetch(args[0])

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

    const reason = args[1] || "There was no reason!";

    message.guild.members.unban(toBan, reason)

    message.channel.send(`${toBan} has been unbanned from the server!`)
}

module.exports.config = {
    name: "unban",
    description: "command to lift the hammer",
    usage: "-unban",
    accessableby: "Admins",
    aliases: []
}