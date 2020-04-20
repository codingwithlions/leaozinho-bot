const commands = [
  {
    command: 'dilma',
    help: 'Mostra uma frase engraçada da nossa ex-presidente Dilma',
  },
  {
    command: 'oi',
    help: 'Responde ao seu "oi" e lhe conta uma verdade :speak_no_evil:',
  },
  {
    command: 'vtnc',
    help: 'Em momentos de fúria você pode usar esse comando e o bot irá te responder de forma super educada :smile:',
  },
];

const allGreetings = ['Olá, ', 'Opa, ', 'E aí, ', 'Oi, '];

function listCommands(username, channel) {
  const greeting = allGreetings[Math.floor(Math.random() * allGreetings.length)];
  let output = `${greeting} ${username}! Aqui estão os nossos comandos :lion_face:`;
  commands.map((command) => {
    const sentence = `Comando: ${command.command}\nO que faz: ${command.help}`;
    output += `\n\n${sentence}`;
    return output;
  });

  channel.send(output);
}

module.exports = { listCommands };
