exports.run = (client, message) => {
  message.channel.send('Update?')
  .then(msg => {
  msg.edit(`The latest WolfBot update added:\n\n roleadd and roleremove. Big thanks to Knate3#9781 for making this command`);
   });
  };

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'update',
description: 'Tells you the latest updates on WolfBot',
usage: 'update'
};
