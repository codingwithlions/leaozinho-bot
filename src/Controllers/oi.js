function oi(author, channel) {
  if (author.id === '230047229203841025') {
    channel.send(`Oi ${author.username}, você é lindo`);
  } else {
    channel.send(`Oi ${author.username}, você é feio`);
  }
}

module.exports = { oi };
