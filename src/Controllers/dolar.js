const axios = require('axios');
const puppeteer = require('puppeteer');

async function dolar(channel) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q=dolar');
  const dolarTodayText = await page.evaluate(() => document.getElementsByClassName('DFlfde SwHCTb')[0].innerHTML);
  const dolarToday = Number(dolarTodayText.replace(',', '.'));

  const pokemonNumber = `${(dolarToday * 100)}`.split('.');
  const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber[0]}`);
  const pokemon = pokemonData.data.name;

  channel.send(`Dólar hoje: ${dolarToday}, Pokemon: ${pokemon}`);
}

module.exports = { dolar };
