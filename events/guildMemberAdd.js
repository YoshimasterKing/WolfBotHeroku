module.exports = member => {
  const guild = member.guild;
  guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES")).send(`Please welcome ${member.user.username} to the server!`);
};
