exports.run = (client, message) => {
message.channel.send('Invite?')
.then(msg => {
msg.edit(`Go invite WolfBot to your own server! https://discordapp.com/api/oauth2/authorize?client_id=392629825719894016&permissions=8&scope=bot`);
 });
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'invite',
description: 'Sends a Wolf Bot invite link',
usage: 'invite'
};
