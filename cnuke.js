const Discord = require('discord.js');

module.exports = {
    name: 'nuke',
    aliases: ['nukes'],
    description: 'Nuke A Channel qq',
    category: '⚙️| Moderation',
    usage: `${prefix}nuke`,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    async execute(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")){
        //You can change the Permission it requires to something else//
            return message.channel.send("You dont have the permission to use this commands!")
        }
        let reason = args.join(" ") || "No Reason :/"
        if(!message.channel.deletable) {
            return message.reply("This channel cannot be nuked bruh :/")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
        let nukeembed = new Discord.MessageEmbed()
        .setTitle("Channel Has Been Nuked")
        .setDescription(reason)
        .setImage('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
        //You can change this gif to something else//
        await newchannel.send(nukeembed)
    }
}