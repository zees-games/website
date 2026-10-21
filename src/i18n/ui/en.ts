/**
 * The site's copy in English: the reference shape every other locale must
 * match key for key (`Messages`, below), so a missing translation is a build
 * error, not an English string on a German page.
 *
 * - `{name}` is a value filled in by `Fmt`.
 * - `{tmc}`, `{deploy}`, `{assets}` and other link slots are filled with an
 *   `<a>` by `Rich`; the text around them is translated, the link label too.
 * - An object with `other` is a plural, picked by `Intl.PluralRules`: add the
 *   forms the language needs (`one`, `few`, `many`, ...).
 * - Game names, map names and "Zee's Games" are proper nouns: never translated.
 */
export const en = {
  meta: {
    siteDescription:
      "Open source multiplayer games made with Godot and run on The Modding Community's gaming platform: deathmatch, surf and bhop, sandbox, minigames and more.",
    gameDescription: '{title}: {tagline} Free and open source, play it on The Modding Community.',
    mapsTitle: '{title} maps',
    mapsDescription: "Every {title} map, shown in Zee's Games next to the original map it was ported from.",
    mapsDescriptionOwn: "Every {title} map, as it looks in Zee's Games.",
    goalsTitle: 'Goals',
    goalsDescription:
      "Why Zee's Games exist: real games, made for fun, that show what The Modding Community's gaming platform can do, from community servers to multi-game servers that switch games without dropping players.",
    inspirationsTitle: "Inspirations",
    inspirationsDescription:
      "What Zee's Games grew out of: Valve's Source games, Facepunch's Garry's Mod, community servers, and the mappers and modders behind classic game modes like DeathRun, surf and Prop Hunt.",
    serversTitle: 'Servers',
    serversDescription:
      "Zee's own servers for every game, run for fun so anyone can play them in multiplayer on The Modding Community. Anyone can run a server of their own, too.",
    serverDescription: "{name}: Zee's {title} server at {address}, run for fun so anyone can play {title} in multiplayer. Join it on The Modding Community.",
    serverMultiDescription: "{name}: Zee's multi-game server at {address}, switching between several games. Join it on The Modding Community.",
    notFoundTitle: 'Not found',
    notFoundDescription: 'This page does not exist.',
    bannerAlt: "Zee's Games banner: neon title over a wireframe landscape",
    ogAlt: "Zee's Games: the neon Z logo, the list of games and screenshots of three of them",
    ogGameAlt: "{title} on Zee's Games",
  },
  nav: {
    main: 'Main',
    home: "Zee's Games home",
    games: 'Games',
    servers: 'Servers',
    goals: 'Goals',
    inspirations: "Inspirations",
    menu: 'Menu',
    github: "Zee's Games on GitHub",
    discord: "Zee's Games on Discord",
    playOnTmc: 'Play on TMC',
    language: 'Language',
  },
  footer: {
    blurb:
      "Open source multiplayer games built with Godot, hosted and played on {tmc}'s gaming platform. They started as demos of what the platform can do, and they are made for fun.",
    tmc: 'The Modding Community',
    explore: 'Explore',
    openSource: 'Open source',
    github: 'GitHub',
    sourceCode: 'Source code',
    madeWithGodot: 'Made with Godot',
    discord: "Discord server",
    youtube: "Zee's Games on YouTube",
    instagram: "Zee's Games on Instagram",
    facebook: "Zee's Games on Facebook",
    email: "Email Zee's Games",
    sourceOnGithub: 'Source code on GitHub',
    disclaimer:
      "Zee's Games is a personal project and not an official product of The Modding Community. Original maps belong to their authors; see each map's credits.",
  },
  kind: {
    game: 'Game',
    minigame: 'Minigame',
  },
  card: {
    zeesServer: "Zee's server",
    coverAlt: '{title} in game',
    maps: { one: '{n} map', other: '{n} maps' },
  },
  play: {
    playNow: 'Play Now',
    zeesServer: "Play on Zee's server",
    onTmc: '{title} on TMC',
    source: 'Source',
  },
  home: {
    eyebrow: 'Open source · Made with Godot',
    intro:
      "Multiplayer games I build for fun and run on {tmc}'s gaming platform. Each one shows off what the platform can do: deathmatch, surf and bhop, a physics sandbox, and a pile of minigames. All of them are still in development.",
    tmc: 'The Modding Community',
    pickGame: 'Pick a game',
    myGoals: 'My goals',
    statGames: 'Games',
    statServers: 'My servers',
    statPrice: 'Price',
    free: 'Free',
    gamesTitle: "Full games",
    gamesBody: "Every game here is still in development, with more on the way. Some have a dedicated server of mine on TMC; any of them can be started from TMC or run on a server of your own.",
    allServers: 'All my servers',
    allOnTmc: 'All games on TMC',
    minigamesTitle: "Minigames",
    minigamesBody: "Short games that usually run on servers playing several games in turn, like my minigames server, but every one can be played solo too. Another goal of mine is making the bots and NPCs smart enough to play them.",
    poweredTitle: 'Powered by The Modding Community',
    poweredBody:
      'TMC hosts, lists and runs every game here. These games are its demos: proof of what the platform, and the open Dot addons for Godot, can do for any game. They are also made for fun.',
    readGoals: 'Read my goals',
    discordTitle: "Come hang out on Discord",
    discordBody: "Find people to play with, report bugs, suggest maps and see what is coming next.",
    discordCta: "Join the Discord",
    followOn: "Follow us on",
    features: [
      { title: 'Community servers', body: 'Anyone can host a server, tune its settings and list it.' },
      { title: 'Play anywhere', body: 'Browser, desktop app or phone, all on the same servers.' },
      { title: 'Many games, one server', body: 'Switch games without dropping the players.' },
      { title: 'Open source', body: 'Every game, map pack and addon is on GitHub.' },
    ],
  },
  game: {
    allGames: '← All games',
    whatItIs: 'What it is',
    howToPlay: 'How to play',
    maps: 'Maps',
    allMaps: 'All {n} maps',
    mapAlt: '{map} in {title}',
    modes: 'Modes',
    inspiredBy: 'Inspired by',
    links: 'Links',
    onTmcLong: '{title} on The Modding Community',
    serverBrowser: 'Server browser',
    roadmap: 'Roadmap',
    changelog: 'Changelog',
    bugs: 'Bug reports',
    mapPack: 'Map pack on GitHub',
    moreGames: 'More games',
    controls: 'Controls',
    controlsIntro: 'The default keys, as the help screen in the game lists them. Press {key} in the game to open it; every key can be changed in the settings.',
    or: 'or',
  },
  keys: {
    space: 'Space',
    shift: 'Shift',
    ctrl: 'Ctrl',
    alt: 'Alt',
    tab: 'Tab',
    esc: 'Esc',
    up: 'Up arrow',
    down: 'Down arrow',
    left: 'Left arrow',
    right: 'Right arrow',
    wasd: 'W, A, S and D',
    range: '{a} to {b}',
    mouseLeft: 'Left mouse button',
    mouseRight: 'Right mouse button',
    mouseMiddle: 'Middle mouse button',
    wheel: 'Mouse wheel',
    wheelUp: 'Mouse wheel up',
    wheelDown: 'Mouse wheel down',
    point: 'Point with the mouse',
    short: { left: 'Left', right: 'Right', middle: 'Middle', wheel: 'Scroll', point: 'Point' },
  },
  servers: {
    eyebrow: 'Servers',
    title: 'My servers.',
    titleAccent: 'Come play.',
    intro:
      'I run these servers for fun, and so that anyone can play the games in multiplayer. They are all listed on {tmc}: join from the web browser, the desktop app or a phone.',
    tmc: 'The Modding Community',
    gameTitle: 'Game servers',
    gameBody: 'One server per game, always running that game.',
    multiTitle: 'Multi-game servers',
    multiBody: 'These switch between several games while the players stay connected.',
    multi: {
      minigames: 'Takes turns through the minigames',
      full: 'Takes turns through the full games',
    },
    multiGame: 'Multi-game',
    address: 'Address',
    copy: 'Copy address',
    copied: 'Copied',
    play: 'Play',
    details: 'Details',
    hostTitle: 'Run your own server',
    hostBody:
      'Anybody can spin up a server running one or more of these games, and I encourage you to. Change the rules, the maps and the modes, then list it on The Modding Community. Everything you need is in the {deploy} repository.',
    deploy: 'Dot Server Deploy',
    hostCta: 'How community servers work',
    modTitle: 'No moderation team, yet',
    modBody:
      'There is no moderation team at the moment. If someone is ruining a round, you can mute or gag them yourself with these chat commands:',
    modNote: 'Mutes and gags only change what you hear and see. Nobody else is affected.',
    cmd: {
      how: 'Type them in chat as {bang} or {slash}, or without the prefix in the console. Each one toggles: the same command again unmutes.',
      list: 'List the players, numbered',
      byNumber: 'Mute player 3 from that list',
      byName: 'Mute a player by name; part of it is enough when only one player matches',
      byId: 'Mute a player by their user id',
      lookAtMe: 'In {game}, you can also look at a player and press {g} to stop hearing them, or {k} to mute their voice and chat.',
    },
  },
  server: {
    allServers: '← All servers',
    funGame: 'Run for fun, so anyone can play {title} in multiplayer.',
    funMulti: 'Run for fun, so anyone can play the games in multiplayer.',
    game: 'Game',
    address: 'Address',
    onTmc: 'This server on TMC',
    howToJoin: 'How to join',
    join: [
      'Press Play. The Modding Community opens the server and starts the game.',
      'Play in the web browser, the desktop app or on a phone: everybody ends up on the same server.',
      'There is no moderation team, so learn the chat commands that mute or gag a player.',
    ],
    selfModLink: 'Mute and gag commands',
    controls: 'Controls for {title}',
    aboutGame: 'About {title}',
    otherServers: 'Other servers',
  },
  maps: {
    heading: '{title} {maps}',
    headingWord: 'maps',
    count: { one: '{n} map.', other: '{n} maps.' },
    allPorted:
      "All of them were ported from older games; each one shows how it looks in Zee's Games next to a screenshot of the original.",
    somePorted:
      "{n} of them were ported from older games; each one shows how it looks in Zee's Games next to a screenshot of the original. The rest were made for this game.",
    nonePorted: 'All of them were made for {title}.',
    mapPack: 'Map pack on GitHub',
    search: 'Search maps',
    filter: 'Filter by type',
    all: 'All',
    shown: { one: '{n} map', other: '{n} maps' },
    none: 'No maps match.',
    noScreenshot: 'No screenshot yet',
    noOriginal: 'No image of the original found',
    labelOurs: "Zee's Games",
    labelOriginal: 'Original',
    originalAlt: '{map} in {game}',
    theOriginalGame: 'the original game',
    portedFrom: 'Ported from {map}',
    portedFromGame: 'Ported from {map} ({game})',
    madeFor: 'Made for {title}',
    by: 'by {author}',
    originalShot: 'Original screenshot:',
    source: 'source',
    closestMatch: '(closest match found: {map})',
    families: {
      surf: 'Surf',
      bhop: 'Bunny Hop',
      kz: 'KZ',
      ze: 'Zombie Escape',
      zs: 'Zombie Survival',
    },
  },
  goals: {
    eyebrow: 'My goals',
    title: 'Demos of a platform.',
    titleAccent: 'Games worth playing.',
    intro:
      "Every game here started as a demonstration of what The Modding Community's gaming platform and its Dot collection can do, and of what your own gaming projects can do on it. They are also made for fun, so each one is built as a real game.",
    demo: {
      title: 'Show what the platform can do',
      body: [
        'These games are a working showcase for the TMC gaming platform: movement, combat, vehicles, NPCs, physics, leaderboards, parties, matchmaking and dedicated servers, all built from the same open Dot addons any other project can use. If one of these games can do something, so can yours.',
        'Being a demo is no excuse for a boring game. Each one gets its own maps, modes and polish, so it is worth playing for its own sake.',
      ],
      tiles: ['Movement', 'Combat', 'Vehicles', 'NPC AI', 'Physics', 'Leaderboards', 'Parties', 'Matchmaking', 'Servers'],
    },
    community: {
      title: 'Focus on community servers',
      body:
        'These games, and the platform as a whole, thrive on {strong}. A main goal is that anyone can spin up a server running one or more of these games with the {deploy} repository.',
      strong: 'community servers',
      deploy: 'Dot Server Deploy',
      online: 'Online',
    },
    rules: {
      title: 'Your server, your rules',
      body:
        'A server owner can change the configuration of the game and of every addon it uses to make the gameplay unique. Then they list the server, and the game, on the platform.',
      sliders: ['Round time', 'Gravity', 'Max players', 'Weapon spread'],
    },
    anywhere: {
      title: 'Join from anywhere',
      body:
        'Players join a listed server straight from the web browser, the desktop app or a phone. The platform is cross-platform, so everybody plays on the same servers.',
      browse: 'Browse games on TMC',
      browser: 'Browser',
      desktop: 'Desktop',
      mobile: 'Mobile',
    },
    multi: {
      title: 'One server, many games',
      body: [
        "A server can run {strong} at once and switch between them while players stay connected. If you have played community servers in Garry's Mod or Counter-Strike, you have seen a server change map and every player download and mount it. Games work the same way here.",
        'Games still have their own maps, but loading a map and loading a game go through nearly the same machinery under the hood.',
      ],
      strong: 'multiple games',
      nextRound: 'next round',
      buildNight: 'build night',
      connected: '12 players connected the whole time',
    },
    cdn: {
      title: 'Content arrives on its own',
      body:
        "When the game or map changes, players automatically download what they need from the platform's global CDN. The CDN syncs files from {assets} on The Modding Community, filed under Godot or the game the content is made for, with versions and tags much like GitHub's for security, deployment and conflicts.",
      assets: 'Assets',
      player: 'Player',
    },
    open: {
      title: 'Free and open source',
      body:
        'Every game, map pack and addon is open source on GitHub. Read how something works, run your own server, or borrow a piece for your own game.',
      org: 'zees-games on GitHub',
      aiTitle: 'Yes, I am using AI',
      aiBody: [
        "Most of these games are not finished yet and will get a lot more work soon. They were created with Claude Code, including converting maps from older games (credited in each repository's README and on each map page here).",
        'They are free, open source and mostly small minigames, and I also build the platform they run on, which takes {em} of time already. AI speeds that up. I wish I did not need it.',
      ],
      aLot: 'a lot',
    },
  },
  notFound: {
    title: 'Respawning elsewhere',
    body: 'This page does not exist, or it moved.',
    back: 'Back to the games',
  },
  inspirations: {
    eyebrow: "Inspirations",
    title: "Classic game modes.",
    titleAccent: "New homes.",
    intro: "Zee's Games grew out of years spent on community servers in Source games and Garry's Mod. These are the games, studios and people that shaped it.",
    sourcesTitle: "Where it all comes from",
    sources: [
      { name: "Valve and the Source engine", body: "Counter-Strike, Half-Life 2: Deathmatch, Team Fortress 2 and Left 4 Dead. The movement Counter-Strike inherited from Half-Life and Quake made surfing and bunny hopping possible, and community servers on the Source engine turned a handful of games into hundreds of game modes: surf, bhop, deathrun, zombie survival and minigame maps of every kind." },
      { name: "Facepunch and Garry's Mod", body: "A sandbox with no rules that became a platform for game modes: Prop Hunt, Murder, Trouble in Terrorist Town, DeathRun and countless more, all made by its community. Playground is my take on the sandbox itself." },
      { name: "Mappers and modders", body: "The people who built the maps and mods, often for free and over many years: surf and bhop maps, minigame maps, zombie maps and total conversions, many of them more inventive than the games they ran in." },
      { name: "Community servers", body: "The server owners and communities who kept these modes alive, set their own rules and gave players a place to come back to, night after night." },
    ],
    also: "Not everything comes from Source alone: Hungario takes after Agar.io, and Wipeout after the TV show as well as Counter-Strike: Source's course maps.",
    classicTitle: "Modes that have been around forever",
    classicBody: ["Many of these game modes are originals in the truest sense: they have been around for about as long as online games have. DeathRun, surf, bunny hop, zombie survival, hide and seek and prop hunt have been rebuilt in engine after engine, and nobody owns them.", "Zee's Games does not claim to have invented any of them. Each game here is the next rebuild of a mode people already love, made to run on a modern, open platform."],
    modes: ["DeathRun", "Surf", "Bunny hop", "Zombie survival", "Hide and seek", "Prop hunt", "Murder", "GunGame", "Minigames"],
    deadTitle: "Dead modes and forgotten maps",
    deadBody: ["Plenty of great game modes are dead or close to it: their servers shut down, their communities moved on and their games aged out. There are also many awesome, impressive maps and mods that were only ever a map or a mod inside someone else's game.", "I want to turn them into games of their own on The Modding Community's gaming platform, the way Buses From Hell and Smash Copter grew out of Counter-Strike: Source minigame maps."],
    offline: "offline",
    yours: "your favourite map",
    serversTitle: "Your server can be anything",
    serversBody: ["Anyone can spin up a server derived from these games, and it does not have to look like mine. Change the rules, the maps and the modes, or build something completely different and unique on top of it.", "That is the great thing about it: each game is a starting point, and every server can grow into its own thing, just like the community servers that inspired these games in the first place."],
    serversCta: "How community servers work",
    serverNew: "something new",
    gamesTitle: "Where each game comes from",
    gamesBody: "What each game takes after, and which ones are my own ideas.",
    ownIdea: "An original idea of mine",
    disclaimer: "Valve, Source, Counter-Strike, Half-Life, Team Fortress, Left 4 Dead, Facepunch, Garry's Mod, Agar.io and Wipeout belong to their owners. Zee's Games is not affiliated with or endorsed by any of them.",
  },
}

/** A plural message: `other` always, plus whichever CLDR forms the language uses. */
export type Plural = { other: string } & Partial<Record<'zero' | 'one' | 'two' | 'few' | 'many', string>>

type Shape<T> = T extends { other: string }
  ? Plural
  : T extends string
    ? string
    : T extends readonly (infer U)[]
      ? Shape<U>[]
      : { [K in keyof T]: Shape<T[K]> }

export type Messages = Shape<typeof en>
