exports.run = (client, message) => {
message.channel.send('Subscribe?')
.then(msg => {
msg.edit(`Go subscribe to ArcaneWolf for great content. He will upload any video that the viewers want so your promised video you'll enjoy and want to click the like button. There are also daily uploads and most days there will be more than one upload. Also share his channel with friends so you can help it grow and know that you helped a future popular YouTuber to get there. https://www.youtube.com/channel/UCQ__I7w-ao-SVddIi170Qig`);
 });
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'subscribe',
description: 'Subscribe command. Sends u a link to sub to ArcaneWolf',
usage: 'subscribe'
};
