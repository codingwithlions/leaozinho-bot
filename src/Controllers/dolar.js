const axios = require('axios');

async function dolar(channel) {
  const dolarArray = await axios.get('https://economia.awesomeapi.com.br/json/daily/USD-BRL/15');
  const dolarToday = dolarArray.data[0].high;

  channel.send(`Hoje o dólar está: ${dolarToday}`);
}

module.exports = { dolar };
