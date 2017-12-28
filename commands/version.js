exports.run = (client, message) => {
message.channel.send('Version?')
.then(msg => {
msg.edit(`WolfBot version 1.0 alpha`);
 });
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'version',
description: 'Tells you what version Wolf bot is currently in!',
usage: 'version'
};
