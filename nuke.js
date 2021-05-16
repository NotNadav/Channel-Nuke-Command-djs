const Discord = require('discord.js');

module.exports = {
    name: 'cnuke',
    aliases: ['nukes'],
    description: 'Nuke A Channel qq',
    category: '⚙️| Moderation',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    async execute(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")){
            return message.channel.send("חוקים וזה...")
        }
        let reason = args.join(" ") || "No Reason :/"
        if(!message.channel.deletable) {
            return message.reply("פוניקס המלך")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
        let nukeembed = new Discord.MessageEmbed()
        .setTitle("פוניקס המלך")
        .setDescription(reason)
        .setImage('https://media.discordapp.net/attachments/812997417166962718/837598170866384896/video0-37_1.gif?width=283&height=502')
        await newchannel.send(nukeembed)
    }
}