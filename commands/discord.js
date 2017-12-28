exports.run = (client, message) => {
message.channel.send('Discord?')
.then(msg => {
msg.edit(`Join the WolfBotOffcial discord for bot updates and more! https://discord.gg/efxVJM3`);
 });
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'discord',
description: 'Sends you a link to join the WolfBotOffcial discord server!',
usage: 'discord'
};
