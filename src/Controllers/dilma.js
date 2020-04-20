const frases = [
  'Eu vi. Você, veja... Eu já vi, parei de ver. Voltei a ver, e acho que o Neymar e o Ganso têm essa capacidade de fazer a gente olhar',
  'Não acho que quem ganhar ou quem perder, nem quem ganhar nem perder, vai ganhar ou perder. Vai todo mundo perder.',
  'Nós não vamos colocar uma meta. Nós vamos deixar uma meta aberta. Quando a gente atingir a meta, nós dobramos a meta.',
  'Eu já entendi que você entende, pois se você não tivesse entendido não entenderia que você teria entendido para ser explicado antes de você entender.',
  'Paes é o prefeito mais feliz do mundo, que dirige a cidade mais importante do mundo e da galáxia. Por que da galáxia? Porque a galáxia é o Rio de Janeiro. A via Láctea é fichinha perto da galáxia que o nosso querido Eduardo Paes tem a honra de ser prefeito.',
  'Quero dizer para vocês que, de fato, Roraima é a capital mais distante de Brasília, mas eu garanto para vocês que essa distância, para nós do Governo Federal, só existe no mapa. E aí eu me considero hoje uma roraimada, roraimada, no que prova que eu estou bem perto de vocês.',
  'É só fazer um raciocínio: temos eleições a cada dois anos no Brasil. Tudo o que o governo fizer é campanha eleitoral.',
  "Foi muito, houve uma procura imensa, tinham seis empresas que apresentaram suas propostas, houve um deságio de quase… Foi um pouco mais de 38%, mas eu fico em 38% para ninguém dizer: 'Ah, ela disse que era 38′, mas não é não. É 39, 38 e qualquer coisa ou é 36. 38, eu acho que é 39, mas vou dizer 38.",
  'Não, querido, eu acho que o meu mandato é, eu diria assim, mais firme do que essa rede. Agora, a rede, eu acho que ela tem um lado lúdico, sabe? Porque isso que as crianças gostam tanto no pavilhão. Porque, quando você está lá em cima… Eu não posso ficar aqui brincando, não é? Então… Mas você percebe direitinho como é que dá para brincar, porque se você inclinar para um lado e, imediatamente, virar para o outro, você fica balançando mesmo, você consegue equilibrar.',
  'E tem uma, tem uma pintura dela que eu acho genial, é… como é que é? Natureza Morta… Ai, eu tinha de lembrar a palavra. Natureza Morta… é uma contradição em termos: de que que é o quadro? É uma natureza morta? Rodando, você entendeu? É o stand still a Natureza Morta, aí a Remedios Varo vai lá e faz… ela bota uma mesa e os componentes da natureza morta estão girando. O nome é interessantíssimo. O nome tem uma certa, uma certa ironia.',
  'E aqui nós temos uma, como também os índios e os indígenas americanos têm a dele, nós temos a mandioca. E aqui nós estamos comungando a mandioca com o milho. E, certamente, nós teremos uma série de outros produtos que foram essenciais para o desenvolvimento de toda a civilização humana ao longo dos séculos. Então, aqui, hoje, eu estou saudando a mandioca. Acho uma das maiores conquistas do Brasil.',
  'Acho uma das maiores conquistas do Brasil. (...) Eu acho que a importância da bola é justamente essa, o símbolo da capacidade que nos distingue como... Nós somos do gênero humano, da espécie Sapiens. Então, para mim essa bola é um símbolo da nossa evolução. Quando nós criamos uma bola dessas, nós nos transformamos em Homo sapiens ou "mulheres sapiens".',
  "Eu acredito que nós teremos uns Jogos Olímpicos que vai ter uma qualidade totalmente diferente e que vai ser capaz de deixar um legado tanto… porque geralmente as pessoas pensam: 'Ah, o legado é só depois'. Não, vai deixar um legado antes, durante e depois.",
];

function dilma(channel) {
  const randomNumber = Math.floor(Math.random() * frases.length);
  channel.send(`${frases[randomNumber]} - Dilmãe`);
}

module.exports = { dilma };
