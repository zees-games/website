import type { GameSlug } from './games'

/**
 * Zee's own servers, by hand. Each one is a box under `zeesgames.com`, and its
 * subdomain is its name here: `/<app>/s/<id>` on this site, `<id>.zeesgames.com`
 * to connect. TMC lists the same server under its own numeric `tmcId` (or a
 * custom url that redirects from it), which is what every Play link uses.
 *
 * `app` is the TMC app the server is filed under: one of our games, or `godot`
 * for the multi-game servers that switch between several of them.
 */
export interface ZeeServer {
  /** The subdomain: `ar01` is `ar01.zeesgames.com`, and `/<app>/s/ar01` here. */
  id: string
  app: GameSlug | 'godot'
  /** The server's id on TMC (`TMC_URL/<app>/s/<tmcId>`). */
  tmcId: string
  /** The server's name, as it lists itself. A proper noun: never translated. */
  name: string
  port: number
  /** A multi-game server runs the minigames or the full games in turn. */
  multi?: 'minigames' | 'full'
}

export const SERVER_DOMAIN = 'zeesgames.com'

export const SERVERS: ZeeServer[] = [
  { id: 'ar01', app: 'arena', tmcId: '3803239', name: "Zee's Arena #1", port: 6020 },
  { id: 'g2gfast01', app: 'g2gfast', tmcId: '3550523', name: "Zee's G2gfast #1", port: 6005 },
  { id: 'pg01', app: 'playground', tmcId: '3803266', name: "Zee's Playground #1", port: 6010 },
  { id: 'hg01', app: 'hungario', tmcId: '3803240', name: "Zee's Hungario #1", port: 6030 },
  { id: 'zz01', app: 'zombie-zone', tmcId: '3803271', name: "Zee's Zombie Zone #1", port: 6050 },
  { id: 'hns01', app: 'hide-n-seek', tmcId: '4687427', name: "Zee's Hide n Seek #1", port: 6080 },
  { id: 'ph01', app: 'prop-hunt', tmcId: '3803270', name: "Zee's Prop Hunt #1", port: 6040 },
  { id: 'mm01', app: 'murder-mystery', tmcId: '4852238', name: "Zee's Murder Mystery #1", port: 7010 },
  { id: 'dd01', app: 'dangerous-delivery', tmcId: '4688026', name: "Zee's Dangerous Delivery #1", port: 7000 },
  { id: 'lam01', app: 'look-at-me', tmcId: '4688025', name: "Zee's Look At Me #1", port: 6090 },
  { id: 'min01', app: 'godot', tmcId: '4363868', name: "Zee's Minigames #1", port: 6060, multi: 'minigames' },
  { id: 'mul01', app: 'godot', tmcId: '4363869', name: "Zee's Multigames #1", port: 6070, multi: 'full' },
]

export const ServerHost = (s: ZeeServer) => `${s.id}.${SERVER_DOMAIN}`
export const ServerAddress = (s: ZeeServer) => `${ServerHost(s)}:${s.port}`
/** This site's page for a server. */
export const ServerPath = (s: ZeeServer) => `/${s.app}/s/${s.id}`
/** A game's own servers (not the multi-game ones). */
export const ServersFor = (slug: GameSlug) => SERVERS.filter((s) => s.app === slug)
