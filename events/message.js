const settings = require('../settings.json');
const swearWords = ["shite", "fuck", "shit", "cunt", "cuck", "bitch", "fk", "dick"];
module.exports = message => {
    const client = message.client;
    if (message.author.bot) return;
   if (swearWords.some(word => message.content.toLowerCase().includes(word))) {
        message.delete()
        return message.reply("Hey! One of those words are non advertiser friendly! I dont want to be demonitized so get that word outta here!").catch(console.log)
    };

    if (!message.content.startsWith(settings.prefix)) return;
    const command = message.content.split(' ')[0].slice(settings.prefix.length);
    const params = message.content.split(' ').slice(1);
    const perms = client.elevation(message);
    let cmd;
    if (client.commands.has(command)) {
        cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
        cmd = client.commands.get(client.aliases.get(command));
    }
    if (cmd) {
        if (perms < cmd.conf.permLevel) return;
        cmd.run(client, message, params, perms);
    }
};
