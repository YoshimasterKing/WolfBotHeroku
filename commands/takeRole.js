const Discord = require('discord.js');
exports.run = (Client, message, args) => {
  var guild = message.guild;
    if (args.length > 1) {
            guild.member(message.mentions.users.first()).removeRole(message.mentions.roles.first()).catch(error => console.log(error));
            const user = message.mentions.users.first();
            const role = message.mentions.roles.first();
        message.reply(`Alright i removed ${role} from ${user}`)
        } else {
          message.reply('Please mention a valid user')
        }
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 2
};

exports.help = {
name: 'removerole',
description: 'Remove a role from a mentioned user. Credit to Knate3#9781 for making this command',
usage: 'removerole @USERNAME @ROLENAME'
};
