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
      "Why Zee's Games exist: real, fun games that show what The Modding Community's gaming platform can do, from community servers to multi-game servers that switch games without dropping players.",
    notFoundTitle: 'Not found',
    notFoundDescription: 'This page does not exist.',
    bannerAlt: "Zee's Games banner: neon title over a wireframe landscape",
  },
  nav: {
    main: 'Main',
    home: "Zee's Games home",
    games: 'Games',
    goals: 'Goals',
    menu: 'Menu',
    github: "Zee's Games on GitHub",
    playOnTmc: 'Play on TMC',
    language: 'Language',
  },
  footer: {
    blurb:
      "Open source multiplayer games built with Godot, hosted and played on {tmc}'s gaming platform. They started as demos of what the platform can do, and they are meant to be fun.",
    tmc: 'The Modding Community',
    explore: 'Explore',
    openSource: 'Open source',
    orgOnGithub: 'zees-games on GitHub',
    sourceCode: 'Source code',
    madeWithGodot: 'Made with Godot',
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
      "Multiplayer games I build and run on {tmc}'s gaming platform. Each one shows off what the platform can do, and each one is built to be fun: deathmatch, surf and bhop, a physics sandbox, and a pile of minigames.",
    tmc: 'The Modding Community',
    pickGame: 'Pick a game',
    myGoals: 'My goals',
    statGames: 'Games',
    statServers: 'My servers',
    statPrice: 'Price',
    free: 'Free',
    runningTitle: 'Running now',
    runningBody: 'Games with one of my own servers up on TMC. Jump straight in.',
    allOnTmc: 'All games on TMC',
    worksTitle: 'In the works',
    worksBody: 'More games and minigames on the way. Most are playable already; servers come next.',
    poweredTitle: 'Powered by The Modding Community',
    poweredBody:
      'TMC hosts, lists and runs every game here. These games are its demos: proof of what the platform, and the open Dot addons for Godot, can do for any game. They are also just fun.',
    readGoals: 'Read my goals',
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
    mapPack: 'Map pack on GitHub',
    moreGames: 'More games',
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
      "Every game here started as a demonstration of what The Modding Community's gaming platform and its Dot collection can do, and of what your own gaming projects can do on it. A demo still deserves to be fun, so each one is built as a real game.",
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
