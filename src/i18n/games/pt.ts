import type { GameText } from './en'
import type { GameSlug } from '../../data/games'

export const pt: Record<GameSlug, GameText> = {
  'arena': {
    tagline: 'Deathmatch rápido na primeira pessoa com GunGame e mapas clássicos de Surf Deathmatch.',
    summary: [
      'Um shooter de deathmatch rápido na primeira pessoa. Escolha um equipamento, compre armas nas zonas de compra e entre num jogo de team deathmatch, todos contra todos ou GunGame.',
      'O Arena também tem os mapas clássicos de Surf Deathmatch dos antigos jogos Counter-Strike: combate-se enquanto se faz surf em rampas a grande velocidade.',
    ],
    howToPlay: [
      'Escolha um equipamento ou compre armas numa zona de compra.',
      'Abra caminho até ao topo da classificação antes de o tempo acabar.',
      'No GunGame, cada abate troca a sua arma pela seguinte da escada.',
    ],
    modes: ['Team Deathmatch', 'Todos contra todos', 'GunGame', 'Surf Deathmatch'],
    inspiredBy: 'Os servidores de deathmatch e combate surf do Counter-Strike: Source',
  },
  'g2gfast': {
    tagline: 'Corridas contrarrelógio de bunny hop e surf com movimento ao estilo Source e classificações.',
    summary: [
      'Um jogo de bunny hop e surf contrarrelógio com movimento ao estilo Source, zonas de início e fim e classificações. Corra contra o relógio em mapas clássicos e persiga recordes mundiais.',
      'Se já jogou em servidores de Surf Timer ou Bunny Hop no Counter-Strike, já sabe como se joga.',
    ],
    howToPlay: [
      'Saia da zona de início para iniciar o cronómetro.',
      'Faça strafe e salte para manter a velocidade; faça surf nas rampas sem cair.',
      'Chegue à zona final e depois bata o seu tempo.',
    ],
    modes: ['Surf', 'Bunny Hop', 'KZ'],
    inspiredBy: 'Os servidores de Surf Timer e Bunny Hop do Counter-Strike: Source',
  },
  'playground': {
    tagline: 'Um sandbox de física: faça aparecer objetos, NPC e armas e construa o que quiser.',
    summary: [
      'Um sandbox de física. Mantenha Q premido para abrir o menu de criação e largue objetos, NPC e armas; depois agarre tudo com as armas de física e de gravidade e construa o que quiser.',
      "Não há regras. O Garry's Mod foi uma grande inspiração, caso não tenha reparado.",
    ],
    howToPlay: [
      'Mantenha Q premido para abrir o menu de criação.',
      'Agarre, lance e congele objetos com as armas de física e de gravidade.',
      'Construa, lute ou divirta-se à vontade; o servidor é seu para jogar.',
    ],
    modes: ['Sandbox'],
    inspiredBy: "Garry's Mod",
  },
  'hungario': {
    tagline: 'Conduza um monstro esfomeado, coma para crescer e sobreviva a todos os outros.',
    summary: [
      'Um jogo multijogador 2D em que começa como um pequeno monstro esfomeado. Coma comida e jogadores mais pequenos para crescer e evite quem for maior do que você.',
      'Divida-se para se lançar sobre as presas, ejete massa para as atrair e tente acabar no topo da classificação. Inspirado no clássico jogo de navegador Agar.io.',
    ],
    howToPlay: [
      'Mova-se com o rato: perto do seu monstro é lento, longe é rápido.',
      'Prima Espaço para se dividir e arremeter, W para ejetar massa.',
      'Coma quem for mais pequeno do que você; fuja de quem for maior.',
    ],
    modes: ['Todos contra todos', 'Divisão'],
    inspiredBy: 'Agar.io',
  },
  'buses-from-hell': {
    tagline: 'Sobreviva a um ou mais condutores de autocarro enlouquecidos que o querem atropelar.',
    summary: [
      'Um ou dois jogadores conduzem os autocarros. Todos os outros andam a pé e têm de sobreviver aos atropelamentos até ao fim da ronda.',
      'Inspirado no mapa de minijogo buses_from_hell do Counter-Strike: Source.',
    ],
    howToPlay: [
      'Corredores: não pare de se mexer, use abrigos e nunca fique na estrada.',
      'Condutores: atropele o maior número possível de corredores antes de o tempo acabar.',
    ],
    modes: ['Condutores contra corredores'],
    inspiredBy: 'buses_from_hell, um mapa de minijogo do Counter-Strike: Source',
  },
  'smash-copter': {
    tagline: 'Mantenha-se em plataformas instáveis enquanto um canhão faz chover objetos sobre si.',
    summary: [
      'Os jogadores aparecem em plataformas equilibradas em pilares únicos, enquanto um canhão ao centro dispara objetos para o ar. O que sobe tem de descer, e pode atirá-lo ao vazio.',
      'Sobreviva sozinho ou em equipas, consoante a configuração do servidor. Inspirado no mapa de minijogo mg_3k_smash_lego_copter do Counter-Strike: Source.',
    ],
    howToPlay: [
      'Vigie o céu e desvie-se de tudo o que o canhão lançar.',
      'Não caia da sua plataforma.',
      'Seja o último jogador, ou equipa, de pé.',
    ],
    modes: ['Sobrevivência a solo', 'Sobrevivência em equipas'],
    inspiredBy: 'mg_3k_smash_lego_copter, um mapa de minijogo do Counter-Strike: Source',
  },
  'zombie-zone': {
    tagline: 'Sobrevivência zombie cooperativa: fuja pela cidade ou sobreviva a vagas.',
    summary: [
      'Um jogo cooperativo de zombies. Lute pela cidade durante a noite, de um abrigo para o seguinte, ou defenda uma escola, um centro comercial ou um campo de basebol contra vagas de uma horda dirigida com infetados especiais.',
      'Os zombies largam caixas com efeitos aleatórios, uns bons e outros muito maus.',
    ],
    howToPlay: [
      'Fiquem juntos e protejam-se uns aos outros.',
      'No Exodus, chegue à sala segura seguinte; no Survival, sobreviva a vagas.',
      'Arrisque com as caixas, se se atrever.',
    ],
    modes: ['Sobrevivência cooperativa', 'Exodus'],
    inspiredBy: "Left 4 Dead e os servidores de zombies do Counter-Strike: Source, com os conceitos e objetivos muito reformulados",
  },
  'hide-n-seek': {
    tagline: 'Esconda-se como você mesmo; cada escondido apanhado junta-se à caça.',
    summary: [
      'A maioria dos jogadores esconde-se com o seu próprio avatar enquanto um ou dois procuradores contam com o ecrã preto e depois partem à procura.',
      'Um procurador apanha um escondido ao tocar-lhe, e cada escondido apanhado também se torna procurador, por isso a caça cresce ao longo da ronda.',
    ],
    howToPlay: [
      'Escondidos: encontre um sítio antes de a contagem acabar e mantenha-se fora de vista.',
      'Procuradores: toque num escondido para o apanhar.',
      'O último escondido que restar ganha a ronda.',
    ],
    modes: ['Esconde-esconde'],
    inspiredBy: "Hide and Seek, um modo de jogo do Garry's Mod que nunca foi tão popular quanto merecia, mas era muito divertido",
  },
  'prop-hunt': {
    tagline: 'Disfarce-se de mobília e fique quieto enquanto caçadores de olhos vendados o procuram.',
    summary: [
      'A maioria dos jogadores são objetos que se escondem transformando-se em mobília, plantas ou rochas e ficando quietos. Os restantes são caçadores, de olhos vendados no início, com alguns minutos para os encontrar.',
      'Cada tiro errado custa vida a um caçador, por isso disparar a todas as cadeiras da sala não é um plano.',
    ],
    howToPlay: [
      'Objetos: transforme-se em algo que pertença à sala e não se mexa.',
      'Caçadores: dispare sobre o que parecer deslocado; os erros doem.',
    ],
    modes: ['Objetos contra caçadores'],
    inspiredBy: "Prop Hunt do Garry's Mod",
  },
  'murder-mystery': {
    tagline: 'Todos têm o mesmo aspeto. Um deles tem uma faca.',
    summary: [
      'Um jogo 3D de dedução social em que todos têm o mesmo aspeto. Um ou dois jogadores são assassinos com uma faca, um ou dois inocentes têm uma arma de um só tiro, e ninguém sabe o papel dos outros.',
      "Descubra quem é quem antes que cheguem até si. Inspirado no antigo modo de jogo Murder do Garry's Mod.",
    ],
    howToPlay: [
      'Assassino: elimine pessoas sem ser visto.',
      'Inocente armado: tem apenas um tiro, por isso aproveite-o bem.',
      'Todos os outros: reúna pistas e mantenha-se vivo.',
    ],
    modes: ['Dedução social'],
    inspiredBy: "Murder, um modo de jogo do Garry's Mod",
  },
  'deathrun': {
    tagline: 'Percorra um circuito cheio de armadilhas enquanto os ativadores carregam em todos os botões.',
    summary: [
      'A maioria dos jogadores são corredores que atravessam um longo circuito cheio de armadilhas, enquanto um ou mais ativadores, ao lado, têm um botão para cada armadilha e tentam matá-los.',
      'Quem chega ao fim recebe uma arma e enfrenta os ativadores. Inspirado no mod DeathRun do Counter-Strike.',
    ],
    howToPlay: [
      'Corredores: vigie o ativador e calcule o momento de passar cada armadilha.',
      'Ativadores: carregue em cada botão de armadilha exatamente no pior momento.',
      'Chegue ao fim para se armar e virar o jogo.',
    ],
    modes: ['Corredores contra ativadores'],
    inspiredBy: 'DeathRun, um mod do Counter-Strike',
  },
  'wipeout': {
    tagline: 'Percursos de obstáculos sobre a água: braços giratórios, bolas enormes e uma luta na meta.',
    summary: [
      'Corra por percursos de obstáculos construídos sobre a água: braços giratórios, bolas enormes, troncos rolantes, martelos e pisos que desaparecem. Cair à água leva-o de volta ao último ponto de controlo.',
      'Se mais de um jogador chegar à meta, lutam numa arena aleatória até restar apenas um. Inspirado no clássico programa de televisão.',
    ],
    howToPlay: [
      'Calcule os seus saltos para passar cada obstáculo.',
      'Se cair, recomeça a partir do último ponto de controlo.',
      'Chegue à meta e depois ganhe a final na arena.',
    ],
    modes: ['Corrida de obstáculos', 'Final na arena'],
    inspiredBy: 'Wipeout, o programa de televisão',
  },
  'dangerous-delivery': {
    tagline: 'Transporte cargas por estradas de montanha sem proteções. Quanto mais arriscado, mais paga.',
    summary: [
      'Conduza camiões carregados por estradas de montanha sem proteções, com neve, chuva, vento e queda de pedras, e entregue a carga no depósito.',
      'Quanto mais perigosa a entrega, melhor paga, e o dinheiro compra camiões maiores e melhorias.',
    ],
    howToPlay: [
      'Aceite um trabalho; os transportes mais difíceis pagam mais.',
      'Leve o camião e a carga ao depósito inteiros.',
      'Gaste os seus ganhos em camiões maiores e melhorias.',
    ],
    modes: ['Entregas'],
  },
  'look-at-me': {
    tagline: 'Uma casa escura com 32 níveis de profundidade e as bruxas que percorrem as suas divisões.',
    summary: [
      'Um jogo de semiterror. Avance por uma casa escura com 32 níveis de profundidade enquanto as bruxas percorrem as suas divisões. São NPC que patrulham cada nível, e cada nível é mais difícil do que o anterior.',
      'Encontre o que abre a porta seguinte antes que uma delas o olhe durante demasiado tempo. Há suporte para mapas personalizados.',
    ],
    howToPlay: [
      'Encontre o objetivo que abre a porta seguinte.',
      'Fique fora da vista das bruxas; não deixe que uma o olhe durante muito tempo.',
      'Complete os 32 níveis.',
    ],
    modes: ['Progressão por níveis'],
  },
}
