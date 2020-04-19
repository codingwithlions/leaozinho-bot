/* eslint-disable no-console */
const Discord = require('discord.js');
require('dotenv/config');

const { TOKEN } = process.env;
const prefix = '/';
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', (message) => {
  if (message.content === `${prefix}ping`) {
    message.channel.send('PONG!');
  } else if (message.content === `${prefix}oi` && message.author.username === 'Ricardo Morato Rocha') {
    message.channel.send(`Oi ${message.author.username}, você é lindo`);
  } else if (message.content === `${prefix}oi`) {
    message.channel.send(`Oi ${message.author.username}, você é feio`);
  } else if (message.content === `${prefix}vtnc`) {
    message.channel.send(`Vai tu ${message.author.username}, FILHO DE RAPARIGA`);
  }
});

client.login(
  TOKEN,
);
