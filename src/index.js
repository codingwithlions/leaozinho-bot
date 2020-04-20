/* eslint-disable no-console */
require('dotenv/config');

// 3rd party
const Discord = require('discord.js');

// Services
const { oi } = require('./Controllers/oi');
const { dilma } = require('./Controllers/dilma');
const { vtnc } = require('./Controllers/vtnc');
const { listCommands } = require('./Controllers/listCommands');

// Config
const { TOKEN } = process.env;
const prefix = '/';
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', (message) => {
  const { author, content, channel } = message;

  if (content.substring(0, 1) === prefix) {
    switch (content) {
      case `${prefix}ping`:
        channel.send('PONG!');
        break;
      case `${prefix}vtnc`:
        vtnc(author.username, channel);
        break;
      case `${prefix}oi`:
        oi(author, channel);
        break;
      case `${prefix}dilma`:
        dilma(channel);
        break;
      case `${prefix}help`:
        listCommands(author.username, channel);
        break;
      default:
        message.channel.send(
          'Que comando legal, quero aprender! (https://github.com/codingwithlions/leaozinho-bot)',
        );
        break;
    }
  }
});

client.login(
  TOKEN,
);
