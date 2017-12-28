module.exports = member => {
  const guild = member.guild;
  guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES")).send(`Please say goodbye to ${member.user.username} we will miss you!`);
};
