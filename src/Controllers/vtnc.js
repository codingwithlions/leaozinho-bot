function vtnc(username, channel) {
  const frases = [
    `Vai tu ${username}, FILHO DE RAPARIGA`,
    'Eu? tomar no cu? Teu rabo é carniça, meu pau é urubu',
    `Te fode ${username}`,
    `Assim você me deixa triste, ${username} :sob:`,
  ];

  const randomNumber = Math.floor(Math.random() * frases.length);

  channel.send(frases[randomNumber]);
}

module.exports = { vtnc };
