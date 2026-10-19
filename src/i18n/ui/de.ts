import type { Messages } from './en'

export const de: Messages = {
  meta: {
    siteDescription:
      'Open-Source-Multiplayerspiele, entwickelt mit Godot und betrieben auf der Spieleplattform von The Modding Community: Deathmatch, Surf und Bhop, Sandbox, Minispiele und mehr.',
    gameDescription: '{title}: {tagline} Kostenlos und Open Source, spielbar auf The Modding Community.',
    mapsTitle: '{title}-Maps',
    mapsDescription: "Alle Maps von {title}, in Zee's Games neben der Original-Map gezeigt, von der sie portiert wurden.",
    mapsDescriptionOwn: "Alle Maps von {title}, so wie sie in Zee's Games aussehen.",
    goalsTitle: 'Ziele',
    goalsDescription:
      "Warum es Zee's Games gibt: echte, unterhaltsame Spiele, die zeigen, was die Spieleplattform von The Modding Community leisten kann, von Community-Servern bis zu Multispiel-Servern, die das Spiel wechseln, ohne Spieler zu verlieren.",
    notFoundTitle: 'Nicht gefunden',
    notFoundDescription: 'Diese Seite existiert nicht.',
    bannerAlt: "Zee's Games Banner: Neon-Titel über einer Drahtgitter-Landschaft",
  },
  nav: {
    main: 'Hauptnavigation',
    home: "Zee's Games Startseite",
    games: 'Spiele',
    goals: 'Ziele',
    menu: 'Menü',
    github: "Zee's Games auf GitHub",
    playOnTmc: 'Auf TMC spielen',
    language: 'Sprache',
  },
  footer: {
    blurb:
      'Open-Source-Multiplayerspiele, entwickelt mit Godot, gehostet und gespielt auf der Spieleplattform von {tmc}. Sie begannen als Demos dessen, was die Plattform kann, und sie sollen vor allem Spaß machen.',
    tmc: 'The Modding Community',
    explore: 'Entdecken',
    openSource: 'Open Source',
    orgOnGithub: 'zees-games auf GitHub',
    sourceCode: 'Quellcode',
    madeWithGodot: 'Mit Godot entwickelt',
    sourceOnGithub: 'Quellcode auf GitHub',
    disclaimer:
      "Zee's Games ist ein privates Projekt und kein offizielles Produkt von The Modding Community. Die Original-Maps gehören ihren Autoren; die Credits finden Sie bei der jeweiligen Map.",
  },
  kind: {
    game: 'Spiel',
    minigame: 'Minispiel',
  },
  card: {
    zeesServer: 'Zees Server',
    coverAlt: '{title} im Spiel',
    maps: { one: '{n} Map', other: '{n} Maps' },
  },
  play: {
    playNow: 'Jetzt spielen',
    zeesServer: 'Auf Zees Server spielen',
    onTmc: '{title} auf TMC',
    source: 'Quellcode',
  },
  home: {
    eyebrow: 'Open Source · Mit Godot entwickelt',
    intro:
      'Multiplayerspiele, die ich auf der Spieleplattform von {tmc} entwickle und betreibe. Jedes zeigt, was die Plattform kann, und jedes soll Spaß machen: Deathmatch, Surf und Bhop, eine Physik-Sandbox und eine Menge Minispiele.',
    tmc: 'The Modding Community',
    pickGame: 'Spiel auswählen',
    myGoals: 'Meine Ziele',
    statGames: 'Spiele',
    statServers: 'Meine Server',
    statPrice: 'Preis',
    free: 'Kostenlos',
    runningTitle: 'Jetzt online',
    runningBody: 'Spiele mit einem eigenen Server von mir auf TMC. Steigen Sie direkt ein.',
    allOnTmc: 'Alle Spiele auf TMC',
    worksTitle: 'In Arbeit',
    worksBody: 'Weitere Spiele und Minispiele sind unterwegs. Die meisten sind schon spielbar; die Server folgen.',
    poweredTitle: 'Betrieben von The Modding Community',
    poweredBody:
      'TMC hostet, listet und betreibt jedes Spiel hier. Diese Spiele sind seine Demos: der Beweis dafür, was die Plattform und die offenen Dot-Addons für Godot für jedes Spiel leisten können. Und sie machen einfach Spaß.',
    readGoals: 'Meine Ziele lesen',
    features: [
      { title: 'Community-Server', body: 'Jeder kann einen Server hosten, seine Einstellungen anpassen und ihn listen.' },
      { title: 'Überall spielen', body: 'Browser, Desktop-App oder Smartphone, alles auf denselben Servern.' },
      { title: 'Viele Spiele, ein Server', body: 'Das Spiel wechseln, ohne Spieler zu verlieren.' },
      { title: 'Open Source', body: 'Jedes Spiel, jedes Map-Paket und jedes Addon liegt auf GitHub.' },
    ],
  },
  game: {
    allGames: '← Alle Spiele',
    whatItIs: 'Worum es geht',
    howToPlay: 'So wird gespielt',
    maps: 'Maps',
    allMaps: 'Alle {n} Maps',
    mapAlt: '{map} in {title}',
    modes: 'Modi',
    inspiredBy: 'Inspiriert von',
    links: 'Links',
    onTmcLong: '{title} auf The Modding Community',
    serverBrowser: 'Serverbrowser',
    mapPack: 'Map-Paket auf GitHub',
    moreGames: 'Weitere Spiele',
  },
  maps: {
    heading: '{title}-{maps}',
    headingWord: 'Maps',
    count: { one: '{n} Map.', other: '{n} Maps.' },
    allPorted:
      "Alle wurden aus älteren Spielen portiert; jede wird in Zee's Games neben einem Screenshot des Originals gezeigt.",
    somePorted:
      "{n} davon wurden aus älteren Spielen portiert; jede wird in Zee's Games neben einem Screenshot des Originals gezeigt. Die übrigen wurden für dieses Spiel gebaut.",
    nonePorted: 'Alle wurden für {title} gebaut.',
    mapPack: 'Map-Paket auf GitHub',
    search: 'Maps durchsuchen',
    filter: 'Nach Typ filtern',
    all: 'Alle',
    shown: { one: '{n} Map', other: '{n} Maps' },
    none: 'Keine Map passt.',
    noScreenshot: 'Noch kein Screenshot',
    noOriginal: 'Kein Bild des Originals gefunden',
    labelOurs: "Zee's Games",
    labelOriginal: 'Original',
    originalAlt: '{map} in {game}',
    theOriginalGame: 'dem Originalspiel',
    portedFrom: 'Portiert von {map}',
    portedFromGame: 'Portiert von {map} ({game})',
    madeFor: 'Gebaut für {title}',
    by: 'von {author}',
    originalShot: 'Original-Screenshot:',
    source: 'Quelle',
    closestMatch: '(nächstbeste Übereinstimmung: {map})',
    families: {
      surf: 'Surf',
      bhop: 'Bunny Hop',
      kz: 'KZ',
      ze: 'Zombie Escape',
      zs: 'Zombie Survival',
    },
  },
  goals: {
    eyebrow: 'Meine Ziele',
    title: 'Demos einer Plattform.',
    titleAccent: 'Spiele, die sich lohnen.',
    intro:
      'Jedes Spiel hier begann als Demonstration dessen, was die Spieleplattform von The Modding Community und ihre Dot-Sammlung können, und dessen, was Ihre eigenen Spieleprojekte darauf leisten können. Auch eine Demo soll Spaß machen, deshalb ist jedes Spiel als echtes Spiel gebaut.',
    demo: {
      title: 'Zeigen, was die Plattform kann',
      body: [
        'Diese Spiele sind ein funktionierendes Schaufenster der TMC-Spieleplattform: Bewegung, Kampf, Fahrzeuge, NPCs, Physik, Bestenlisten, Partys, Matchmaking und dedizierte Server, alles gebaut aus denselben offenen Dot-Addons, die jedes andere Projekt nutzen kann. Wenn eines dieser Spiele etwas kann, kann Ihres es auch.',
        'Eine Demo zu sein ist keine Entschuldigung für ein langweiliges Spiel. Jedes hat eigene Maps, Modi und Feinschliff und lohnt sich um seiner selbst willen.',
      ],
      tiles: ['Bewegung', 'Kampf', 'Fahrzeuge', 'NPC-KI', 'Physik', 'Bestenlisten', 'Partys', 'Matchmaking', 'Server'],
    },
    community: {
      title: 'Fokus auf Community-Server',
      body:
        'Diese Spiele und die Plattform insgesamt leben von {strong}. Ein Hauptziel ist, dass jeder mit dem Repository {deploy} einen Server mit einem oder mehreren dieser Spiele starten kann.',
      strong: 'Community-Servern',
      deploy: 'Dot Server Deploy',
      online: 'Online',
    },
    rules: {
      title: 'Ihr Server, Ihre Regeln',
      body:
        'Der Betreiber eines Servers kann die Konfiguration des Spiels und jedes verwendeten Addons ändern, um das Gameplay einzigartig zu machen. Danach listet er den Server und das Spiel auf der Plattform.',
      sliders: ['Rundendauer', 'Schwerkraft', 'Max. Spieler', 'Waffenstreuung'],
    },
    anywhere: {
      title: 'Von überall beitreten',
      body:
        'Spieler treten einem gelisteten Server direkt über den Webbrowser, die Desktop-App oder ein Smartphone bei. Die Plattform ist plattformübergreifend, deshalb spielen alle auf denselben Servern.',
      browse: 'Spiele auf TMC durchsuchen',
      browser: 'Browser',
      desktop: 'Desktop',
      mobile: 'Mobil',
    },
    multi: {
      title: 'Ein Server, viele Spiele',
      body: [
        "Ein Server kann {strong} gleichzeitig betreiben und zwischen ihnen wechseln, während die Spieler verbunden bleiben. Wenn Sie schon auf Community-Servern in Garry's Mod oder Counter-Strike gespielt haben, kennen Sie den Kartenwechsel, bei dem jeder Spieler die Map herunterlädt und einbindet. Spiele funktionieren hier genauso.",
        'Spiele haben weiterhin eigene Maps, aber das Laden einer Map und das Laden eines Spiels laufen im Hintergrund über fast dieselbe Technik.',
      ],
      strong: 'mehrere Spiele',
      nextRound: 'nächste Runde',
      buildNight: 'Bauabend',
      connected: '12 Spieler die ganze Zeit verbunden',
    },
    cdn: {
      title: 'Inhalte kommen von allein',
      body:
        'Wenn sich Spiel oder Map ändern, laden die Spieler automatisch herunter, was sie brauchen, und zwar vom globalen CDN der Plattform. Das CDN synchronisiert Dateien aus den {assets} auf The Modding Community, abgelegt unter Godot oder dem Spiel, für das der Inhalt gemacht ist, mit Versionen und Tags ähnlich wie bei GitHub für Sicherheit, Bereitstellung und Konflikte.',
      assets: 'Assets',
      player: 'Spieler',
    },
    open: {
      title: 'Kostenlos und Open Source',
      body:
        'Jedes Spiel, jedes Map-Paket und jedes Addon ist Open Source auf GitHub. Lesen Sie nach, wie etwas funktioniert, betreiben Sie Ihren eigenen Server oder übernehmen Sie einen Teil für Ihr eigenes Spiel.',
      org: 'zees-games auf GitHub',
      aiTitle: 'Ja, ich nutze KI',
      aiBody: [
        'Die meisten dieser Spiele sind noch nicht fertig und bekommen bald deutlich mehr Arbeit. Sie wurden mit Claude Code erstellt, einschließlich der Umwandlung von Maps aus älteren Spielen (mit Credits in der README jedes Repositorys und auf der jeweiligen Map-Seite hier).',
        'Sie sind kostenlos, Open Source und meist kleine Minispiele, und ich baue auch die Plattform, auf der sie laufen, was schon {em} Zeit kostet. KI beschleunigt das. Ich wünschte, ich bräuchte sie nicht.',
      ],
      aLot: 'sehr viel',
    },
  },
  notFound: {
    title: 'Respawn an anderer Stelle',
    body: 'Diese Seite existiert nicht oder wurde verschoben.',
    back: 'Zurück zu den Spielen',
  },
}
