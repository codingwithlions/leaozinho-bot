const axios = require('axios');

async function dolar(channel) {
  const dolarArray = await axios.get('https://economia.awesomeapi.com.br/json/daily/USD-BRL/15');
  const dolarToday = dolarArray.data[0].high;

  const pokemonNumber = `${(dolarToday * 100)}`.split('.');
  const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber[0]}`);
  const pokemon = pokemonData.data.name;

  channel.send(`Dólar hoje: ${dolarToday}, Pokemon: ${pokemon}`);
}

module.exports = { dolar };
