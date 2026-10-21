import type { GameSlug } from '../../data/games'

export interface GameText {
  /** One line for cards. */
  tagline: string
  /** The game page's summary, a paragraph or two. */
  summary: string[]
  /** How a round plays, as short steps. */
  howToPlay: string[]
  modes: string[]
  /** What it is a take on, if anything. */
  inspiredBy?: string
}

/** The reference copy. Written from each game's README: what it does today. */
export const en: Record<GameSlug, GameText> = {
  'arena': {
    tagline: "Fast first-person deathmatch with GunGame and classic Surf Deathmatch maps.",
    summary: [
      "A fast first-person deathmatch shooter. Pick a loadout, buy weapons in the buy zones and jump into a match of team deathmatch, free-for-all or GunGame.",
      "Arena also plays classic Surf Deathmatch maps from older Counter-Strike games: you fight while surfing ramps at speed.",
    ],
    howToPlay: [
      "Pick a loadout, or buy weapons from a buy zone.",
      "Frag your way to the top of the board before the timer ends.",
      "In GunGame, every kill swaps your weapon for the next one in the ladder.",
    ],
    modes: [
      "Team Deathmatch",
      "Free-for-all",
      "GunGame",
      "Surf Deathmatch",
    ],
    inspiredBy: "Counter-Strike: Source deathmatch and surf combat servers",
  },
  'g2gfast': {
    tagline: "Bunny hop and surf timer runs with Source-style movement and leaderboards.",
    summary: [
      "A bunny hop and surf timer game with Source-style movement, start and end zones, and leaderboards. Race the clock through classic maps and chase world records.",
      "If you have played Surf Timer or Bunny Hop servers in Counter-Strike, you already know how it plays.",
    ],
    howToPlay: [
      "Leave the start zone to start the timer.",
      "Strafe and jump to keep your speed; surf the ramps without falling off.",
      "Reach the end zone, then beat your time.",
    ],
    modes: [
      "Surf",
      "Bunny Hop",
      "KZ",
    ],
    inspiredBy: "Counter-Strike: Source Surf Timer and Bunny Hop servers",
  },
  'playground': {
    tagline: "A physics sandbox: spawn props, NPCs and weapons and build whatever you like.",
    summary: [
      "A physics sandbox. Hold Q to open the spawn menu and drop in props, NPCs and weapons, then pick things up with the physics and gravity guns and build whatever you like.",
      "There are no rules. Garry's Mod was a big inspiration, if you hadn't noticed.",
    ],
    howToPlay: [
      "Hold Q to open the spawn menu.",
      "Grab, throw and freeze props with the physics and gravity guns.",
      "Build, fight or mess around; the server is yours to play in.",
    ],
    modes: [
      "Sandbox",
    ],
    inspiredBy: "Garry's Mod",
  },
  'hungario': {
    tagline: "Steer a hungry monster, eat to grow and outlast everyone else.",
    summary: [
      "A 2D multiplayer game where you start as a small, hungry monster. Eat food and smaller players to grow, and avoid anyone bigger than you.",
      "Split to throw yourself at prey, eject mass to bait them, and try to finish on top of the board. Inspired by the classic browser game Agar.io.",
    ],
    howToPlay: [
      "Move with the mouse: close to your monster is slow, far away is fast.",
      "Press Space to split and lunge, W to eject mass.",
      "Eat anyone smaller than you; run from anyone bigger.",
    ],
    modes: [
      "Free-for-all",
      "Split",
    ],
    inspiredBy: "Agar.io",
  },
  'buses-from-hell': {
    tagline: "Survive one or more crazy bus drivers trying to run you over.",
    summary: [
      "One or two players drive the buses. Everyone else is on foot and has to survive being run over until the round ends.",
      "Inspired by the Counter-Strike: Source minigame map buses_from_hell.",
    ],
    howToPlay: [
      "Runners: keep moving, use cover and never stand in the road.",
      "Drivers: run over as many runners as you can before time is up.",
    ],
    modes: [
      "Drivers vs runners",
    ],
    inspiredBy: "buses_from_hell, a Counter-Strike: Source minigame map",
  },
  'smash-copter': {
    tagline: "Stay on wobbly platforms while a cannon rains props down on you.",
    summary: [
      "Players spawn on platforms balanced on single pillars while a cannon in the middle shoots props into the air. What goes up comes down, and it may knock you off.",
      "Survive alone or in teams, depending on how the server is set up. Inspired by the Counter-Strike: Source minigame map mg_3k_smash_lego_copter.",
    ],
    howToPlay: [
      "Watch the sky and dodge whatever the cannon launches.",
      "Do not fall off your platform.",
      "Be the last player, or team, standing.",
    ],
    modes: [
      "Solo survival",
      "Team survival",
    ],
    inspiredBy: "mg_3k_smash_lego_copter, a Counter-Strike: Source minigame map",
  },
  'zombie-zone': {
    tagline: "Co-op zombie survival: escape through the city or survive waves.",
    summary: [
      "A co-op zombie game. Fight through a city at night from one shelter to the next, or hold a school, mall or ballpark through waves of a directed horde with special infected.",
      "Zombies drop boxes with random effects, some good and some very bad.",
    ],
    howToPlay: [
      "Stick together and cover each other.",
      "In Exodus, reach the next safe room; in Survival, survive waves.",
      "Gamble on the drop boxes, if you dare.",
    ],
    modes: [
      "Co-op Survival",
      "Exodus",
    ],
    inspiredBy: "Left 4 Dead and Counter-Strike: Source zombie servers, with the concepts and objectives heavily reworked",
  },
  'hide-n-seek': {
    tagline: "Hide as yourself; every hider caught joins the hunt.",
    summary: [
      "Most players hide as their own avatars while one or two seekers count with a black screen, then go looking.",
      "A seeker catches a hider by touching them, and every caught hider becomes a seeker too, so the hunt grows through the round.",
    ],
    howToPlay: [
      "Hiders: find a spot before the count ends and stay out of sight.",
      "Seekers: touch a hider to catch them.",
      "Last hider left wins the round.",
    ],
    modes: [
      "Hide and seek",
    ],
    inspiredBy: "Hide and Seek, a Garry's Mod game mode that never got as popular as it deserved, but was a lot of fun",
  },
  'prop-hunt': {
    tagline: "Disguise as furniture and keep still while blindfolded hunters search.",
    summary: [
      "Most players are props who hide by turning into furniture, plants or rocks and keeping still. The rest are hunters, blindfolded at the start, with a few minutes to find them.",
      "Every wrong guess costs a hunter health, so shooting every chair in the room is not a plan.",
    ],
    howToPlay: [
      "Props: become something that belongs in the room, then do not move.",
      "Hunters: shoot what looks out of place; wrong guesses hurt.",
    ],
    modes: [
      "Props vs hunters",
    ],
    inspiredBy: "Garry's Mod Prop Hunt",
  },
  'murder-mystery': {
    tagline: "Everybody looks the same. One of them has a knife.",
    summary: [
      "A 3D social deduction game where everybody looks the same. One or two players are murderers with a knife, one or two bystanders carry a single-shot gun, and nobody knows anyone else's role.",
      "Work out who is who before they reach you. Inspired by the old Murder game mode in Garry's Mod.",
    ],
    howToPlay: [
      "Murderer: pick people off without being seen.",
      "Armed bystander: you get one shot, so make it count.",
      "Everyone else: collect clues and stay alive.",
    ],
    modes: [
      "Social deduction",
    ],
    inspiredBy: "Murder, a Garry's Mod game mode",
  },
  'deathrun': {
    tagline: "Run a trap-filled course while the activators press every button they have.",
    summary: [
      "Most players are runners racing down a long course full of traps, while one or more activators stand beside it with a button for every trap and try to kill them.",
      "Whoever reaches the end gets a weapon and fights the activators. Inspired by the DeathRun mod in Counter-Strike.",
    ],
    howToPlay: [
      "Runners: watch the activator and time your way past each trap.",
      "Activators: press each trap button at exactly the wrong moment.",
      "Reach the end to arm up and turn the tables.",
    ],
    modes: [
      "Runners vs activators",
    ],
    inspiredBy: "DeathRun, a Counter-Strike mod",
  },
  'wipeout': {
    tagline: "Obstacle courses over water: sweeper arms, big balls and a fight at the finish.",
    summary: [
      "Race across obstacle courses built over water: sweeping arms, big balls, rolling logs, hammers and floors that drop away. Falling in sends you back to the last checkpoint.",
      "If more than one player finishes, they fight it out in a random arena until one is left. Inspired by the classic TV show and by course maps from Counter-Strike: Source.",
    ],
    howToPlay: [
      "Time your jumps past each obstacle.",
      "Fall in and you restart from the last checkpoint.",
      "Finish, then win the arena final.",
    ],
    modes: [
      "Obstacle race",
      "Arena final",
    ],
    inspiredBy: "Wipeout, the TV show, and Counter-Strike: Source course maps",
  },
  'dangerous-delivery': {
    tagline: "Haul loads up mountain roads with no guard rails. Riskier runs pay more.",
    summary: [
      "Drive loaded trucks up mountain roads with no guard rails, through snow, rain, wind and falling rock, and deliver the load to the depot.",
      "The more dangerous the delivery, the more it pays, and the money buys bigger trucks and upgrades.",
    ],
    howToPlay: [
      "Accept a job; harder hauls pay more.",
      "Get the truck and its load to the depot in one piece.",
      "Spend your earnings on bigger trucks and upgrades.",
    ],
    modes: [
      "Delivery runs",
    ],
  },
  'look-at-me': {
    tagline: "Two dark houses, fifty levels, and witches walking every room.",
    summary: [
      "A semi-horror game. Make your way through two dark houses, The House (32 levels) and The Asylum (18), while witches walk their rooms. Every level is a different map with its own rooms, locked doors and witch patrols, and each one is harder than the last: one witch at the start, six faster, sharper-eyed ones at the end.",
      "Find what opens the next door (a key, a fuse, a code from a note, water for a fire) before one of them looks at you for too long. A server plays one house at a time, and the players vote on the next. Custom maps are supported.",
    ],
    howToPlay: [
      "Find what opens the next door: a key, a fuse, a tool or a code.",
      "Stay out of the witches' sight; do not let one look at you for long.",
      "Clear every level of a house to earn a crown.",
    ],
    modes: [
      "Level progression",
    ],
  },
}
