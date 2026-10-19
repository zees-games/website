import type { Messages } from './en'

export const pt: Messages = {
  meta: {
    siteDescription:
      'Jogos multijogador de código aberto feitos com Godot e executados na plataforma de jogos da The Modding Community: deathmatch, surf e bhop, sandbox, minijogos e muito mais.',
    gameDescription: '{title}: {tagline} Gratuito e de código aberto, jogue na The Modding Community.',
    mapsTitle: 'Mapas de {title}',
    mapsDescription: "Todos os mapas de {title}, mostrados no Zee's Games ao lado do mapa original de que foram portados.",
    mapsDescriptionOwn: "Todos os mapas de {title}, tal como aparecem no Zee's Games.",
    goalsTitle: 'Objetivos',
    goalsDescription:
      "Porque existe o Zee's Games: jogos reais e divertidos que mostram o que a plataforma de jogos da The Modding Community consegue fazer, desde servidores da comunidade a servidores multijogo que mudam de jogo sem perder jogadores.",
    notFoundTitle: 'Não encontrado',
    notFoundDescription: 'Esta página não existe.',
    bannerAlt: "Banner do Zee's Games: título em néon sobre uma paisagem em estrutura de arame",
  },
  nav: {
    main: 'Principal',
    home: "Página inicial do Zee's Games",
    games: 'Jogos',
    goals: 'Objetivos',
    menu: 'Menu',
    github: "Zee's Games no GitHub",
    playOnTmc: 'Jogar na TMC',
    language: 'Idioma',
  },
  footer: {
    blurb:
      'Jogos multijogador de código aberto criados com Godot, alojados e jogados na plataforma de jogos da {tmc}. Começaram como demonstrações do que a plataforma consegue fazer e foram feitos para ser divertidos.',
    tmc: 'The Modding Community',
    explore: 'Explorar',
    openSource: 'Código aberto',
    orgOnGithub: 'zees-games no GitHub',
    sourceCode: 'Código-fonte',
    madeWithGodot: 'Feito com Godot',
    sourceOnGithub: 'Código-fonte no GitHub',
    disclaimer:
      "O Zee's Games é um projeto pessoal e não um produto oficial da The Modding Community. Os mapas originais pertencem aos seus autores; consulte os créditos de cada mapa.",
  },
  kind: {
    game: 'Jogo',
    minigame: 'Minijogo',
  },
  card: {
    zeesServer: 'Servidor do Zee',
    coverAlt: '{title} em jogo',
    maps: { one: '{n} mapa', other: '{n} mapas' },
  },
  play: {
    playNow: 'Jogar agora',
    zeesServer: 'Jogar no servidor do Zee',
    onTmc: '{title} na TMC',
    source: 'Código',
  },
  home: {
    eyebrow: 'Código aberto · Feito com Godot',
    intro:
      'Jogos multijogador que crio e executo na plataforma de jogos da {tmc}. Cada um mostra o que a plataforma consegue fazer e cada um foi feito para ser divertido: deathmatch, surf e bhop, um sandbox de física e uma pilha de minijogos.',
    tmc: 'The Modding Community',
    pickGame: 'Escolha um jogo',
    myGoals: 'Os meus objetivos',
    statGames: 'Jogos',
    statServers: 'Os meus servidores',
    statPrice: 'Preço',
    free: 'Gratuito',
    runningTitle: 'A decorrer agora',
    runningBody: 'Jogos com um servidor meu ativo na TMC. Entre diretamente.',
    allOnTmc: 'Todos os jogos na TMC',
    worksTitle: 'Em desenvolvimento',
    worksBody: 'Mais jogos e minijogos a caminho. A maioria já é jogável; os servidores vêm a seguir.',
    poweredTitle: 'Com tecnologia da The Modding Community',
    poweredBody:
      'A TMC aloja, lista e executa todos os jogos aqui presentes. Estes jogos são as suas demonstrações: a prova do que a plataforma, e os addons abertos Dot para Godot, podem fazer por qualquer jogo. E são, simplesmente, divertidos.',
    readGoals: 'Ler os meus objetivos',
    features: [
      { title: 'Servidores da comunidade', body: 'Qualquer pessoa pode alojar um servidor, ajustar as suas definições e listá-lo.' },
      { title: 'Jogue em qualquer lado', body: 'Navegador, aplicação de computador ou telemóvel, tudo nos mesmos servidores.' },
      { title: 'Muitos jogos, um servidor', body: 'Mude de jogo sem perder jogadores.' },
      { title: 'Código aberto', body: 'Cada jogo, pacote de mapas e addon está no GitHub.' },
    ],
  },
  game: {
    allGames: '← Todos os jogos',
    whatItIs: 'O que é',
    howToPlay: 'Como jogar',
    maps: 'Mapas',
    allMaps: 'Todos os {n} mapas',
    mapAlt: '{map} em {title}',
    modes: 'Modos',
    inspiredBy: 'Inspirado em',
    links: 'Ligações',
    onTmcLong: '{title} na The Modding Community',
    serverBrowser: 'Explorador de servidores',
    mapPack: 'Pacote de mapas no GitHub',
    moreGames: 'Mais jogos',
  },
  maps: {
    heading: '{maps} de {title}',
    headingWord: 'Mapas',
    count: { one: '{n} mapa.', other: '{n} mapas.' },
    allPorted:
      "Todos foram portados de jogos mais antigos; cada um mostra o seu aspeto no Zee's Games ao lado de uma captura do original.",
    somePorted:
      "{n} deles foram portados de jogos mais antigos; cada um mostra o seu aspeto no Zee's Games ao lado de uma captura do original. Os restantes foram feitos para este jogo.",
    nonePorted: 'Todos foram feitos para {title}.',
    mapPack: 'Pacote de mapas no GitHub',
    search: 'Pesquisar mapas',
    filter: 'Filtrar por tipo',
    all: 'Todos',
    shown: { one: '{n} mapa', other: '{n} mapas' },
    none: 'Nenhum mapa corresponde.',
    noScreenshot: 'Ainda sem captura',
    noOriginal: 'Não foi encontrada nenhuma imagem do original',
    labelOurs: "Zee's Games",
    labelOriginal: 'Original',
    originalAlt: '{map} em {game}',
    theOriginalGame: 'o jogo original',
    portedFrom: 'Portado de {map}',
    portedFromGame: 'Portado de {map} ({game})',
    madeFor: 'Feito para {title}',
    by: 'por {author}',
    originalShot: 'Captura original:',
    source: 'fonte',
    closestMatch: '(correspondência mais próxima encontrada: {map})',
    families: {
      surf: 'Surf',
      bhop: 'Bunny Hop',
      kz: 'KZ',
      ze: 'Zombie Escape',
      zs: 'Zombie Survival',
    },
  },
  goals: {
    eyebrow: 'Os meus objetivos',
    title: 'Demonstrações de uma plataforma.',
    titleAccent: 'Jogos que valem a pena.',
    intro:
      'Cada jogo aqui começou como uma demonstração do que a plataforma de jogos da The Modding Community e a sua coleção Dot conseguem fazer, e do que os seus próprios projetos de jogos podem fazer nela. Uma demo também merece ser divertida, por isso cada uma é construída como um jogo a sério.',
    demo: {
      title: 'Mostrar o que a plataforma consegue fazer',
      body: [
        'Estes jogos são uma montra funcional da plataforma de jogos da TMC: movimento, combate, veículos, NPC, física, classificações, parties, matchmaking e servidores dedicados, tudo construído com os mesmos addons abertos Dot que qualquer outro projeto pode usar. Se um destes jogos consegue fazer algo, o seu também consegue.',
        'Ser uma demo não é desculpa para um jogo aborrecido. Cada um tem os seus próprios mapas, modos e acabamento, por isso vale a pena jogá-lo por si só.',
      ],
      tiles: ['Movimento', 'Combate', 'Veículos', 'IA de NPC', 'Física', 'Classificações', 'Parties', 'Matchmaking', 'Servidores'],
    },
    community: {
      title: 'Foco nos servidores da comunidade',
      body:
        'Estes jogos, e a plataforma no seu todo, prosperam graças aos {strong}. Um objetivo principal é que qualquer pessoa possa pôr de pé um servidor com um ou mais destes jogos através do repositório {deploy}.',
      strong: 'servidores da comunidade',
      deploy: 'Dot Server Deploy',
      online: 'Online',
    },
    rules: {
      title: 'O seu servidor, as suas regras',
      body:
        'O proprietário de um servidor pode alterar a configuração do jogo e de cada addon que ele usa para tornar a jogabilidade única. Depois lista o servidor, e o jogo, na plataforma.',
      sliders: ['Duração da ronda', 'Gravidade', 'Máx. de jogadores', 'Dispersão das armas'],
    },
    anywhere: {
      title: 'Entre de qualquer lugar',
      body:
        'Os jogadores entram num servidor listado diretamente a partir do navegador, da aplicação de computador ou de um telemóvel. A plataforma é multiplataforma, por isso todos jogam nos mesmos servidores.',
      browse: 'Explorar jogos na TMC',
      browser: 'Navegador',
      desktop: 'Computador',
      mobile: 'Telemóvel',
    },
    multi: {
      title: 'Um servidor, muitos jogos',
      body: [
        "Um servidor pode executar {strong} em simultâneo e alternar entre eles enquanto os jogadores se mantêm ligados. Se já jogou em servidores da comunidade de Garry's Mod ou Counter-Strike, já viu um servidor mudar de mapa e cada jogador transferi-lo e montá-lo. Aqui, os jogos funcionam da mesma forma.",
        'Os jogos continuam a ter os seus próprios mapas, mas carregar um mapa e carregar um jogo passam quase pela mesma maquinaria por baixo do capô.',
      ],
      strong: 'vários jogos',
      nextRound: 'próxima ronda',
      buildNight: 'noite de construção',
      connected: '12 jogadores ligados o tempo todo',
    },
    cdn: {
      title: 'O conteúdo chega sozinho',
      body:
        'Quando o jogo ou o mapa muda, os jogadores transferem automaticamente o que precisam a partir da CDN global da plataforma. A CDN sincroniza ficheiros dos {assets} da The Modding Community, arquivados em Godot ou no jogo para o qual o conteúdo foi feito, com versões e etiquetas semelhantes às do GitHub para segurança, implementação e conflitos.',
      assets: 'Recursos',
      player: 'Jogador',
    },
    open: {
      title: 'Gratuito e de código aberto',
      body:
        'Cada jogo, pacote de mapas e addon é de código aberto no GitHub. Leia como algo funciona, execute o seu próprio servidor ou aproveite uma peça para o seu próprio jogo.',
      org: 'zees-games no GitHub',
      aiTitle: 'Sim, uso IA',
      aiBody: [
        'A maioria destes jogos ainda não está terminada e vai receber muito mais trabalho em breve. Foram criados com o Claude Code, incluindo a conversão de mapas de jogos mais antigos (creditados no README de cada repositório e na página de cada mapa aqui).',
        'São gratuitos, de código aberto e na sua maioria pequenos minijogos, e eu também construo a plataforma onde funcionam, o que já me ocupa {em} tempo. A IA acelera isso. Gostava de não precisar dela.',
      ],
      aLot: 'muito',
    },
  },
  notFound: {
    title: 'A reaparecer noutro lugar',
    body: 'Esta página não existe ou foi movida.',
    back: 'Voltar aos jogos',
  },
}
