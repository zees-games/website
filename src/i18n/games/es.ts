import type { GameText } from './en'
import type { GameSlug } from '../../data/games'

export const es: Record<GameSlug, GameText> = {
  'arena': {
    tagline: 'Deathmatch rápido en primera persona con GunGame y clásicos mapas de Surf Deathmatch.',
    summary: [
      'Un shooter de deathmatch rápido en primera persona. Elige un equipamiento, compra armas en las zonas de compra y lánzate a una partida de team deathmatch, todos contra todos o GunGame.',
      'Arena también incluye los clásicos mapas de Surf Deathmatch de los antiguos juegos de Counter-Strike: combates mientras surfeas rampas a toda velocidad.',
    ],
    howToPlay: [
      'Elige un equipamiento o compra armas en una zona de compra.',
      'Abre camino hasta lo más alto de la clasificación antes de que acabe el tiempo.',
      'En GunGame, cada baja cambia tu arma por la siguiente de la escalera.',
    ],
    modes: ['Team Deathmatch', 'Todos contra todos', 'GunGame', 'Surf Deathmatch'],
    inspiredBy: 'Los servidores de deathmatch y combate surf de Counter-Strike: Source',
  },
  'g2gfast': {
    tagline: 'Carreras contrarreloj de bunny hop y surf con movimiento estilo Source y clasificaciones.',
    summary: [
      'Un juego de bunny hop y surf contrarreloj con movimiento estilo Source, zonas de inicio y fin, y clasificaciones. Compite contra el reloj en mapas clásicos y persigue récords mundiales.',
      'Si has jugado en servidores de Surf Timer o Bunny Hop en Counter-Strike, ya sabes cómo se juega.',
    ],
    howToPlay: [
      'Sal de la zona de inicio para arrancar el cronómetro.',
      'Haz strafe y salta para mantener la velocidad; surfea las rampas sin caerte.',
      'Llega a la zona final y después mejora tu tiempo.',
    ],
    modes: ['Surf', 'Bunny Hop', 'KZ'],
    inspiredBy: 'Los servidores de Surf Timer y Bunny Hop de Counter-Strike: Source',
  },
  'playground': {
    tagline: 'Un sandbox de física: genera objetos, NPC y armas y construye lo que quieras.',
    summary: [
      'Un sandbox de física. Mantén Q para abrir el menú de aparición y suelta objetos, NPC y armas; luego agárralos con la pistola de física y la de gravedad y construye lo que quieras.',
      "No hay reglas. Garry's Mod fue una gran inspiración, por si no lo habías notado.",
    ],
    howToPlay: [
      'Mantén Q para abrir el menú de aparición.',
      'Agarra, lanza e inmoviliza objetos con las pistolas de física y de gravedad.',
      'Construye, lucha o haz el tonto; el servidor es tuyo para jugar.',
    ],
    modes: ['Sandbox'],
    inspiredBy: "Garry's Mod",
  },
  'hungario': {
    tagline: 'Guía a un monstruo hambriento, come para crecer y sobrevive a todos los demás.',
    summary: [
      'Un juego multijugador en 2D en el que empiezas como un pequeño monstruo hambriento. Come comida y jugadores más pequeños para crecer, y evita a cualquiera más grande que tú.',
      'Divídete para lanzarte sobre tus presas, expulsa masa para atraerlas e intenta acabar en lo más alto de la clasificación. Inspirado en el clásico juego de navegador Agar.io.',
    ],
    howToPlay: [
      'Muévete con el ratón: cerca de tu monstruo es lento, lejos es rápido.',
      'Pulsa Espacio para dividirte y lanzarte, W para expulsar masa.',
      'Come a cualquiera más pequeño que tú; huye de cualquiera más grande.',
    ],
    modes: ['Todos contra todos', 'División'],
    inspiredBy: 'Agar.io',
  },
  'buses-from-hell': {
    tagline: 'Sobrevive a uno o varios conductores de autobús enloquecidos que quieren atropellarte.',
    summary: [
      'Uno o dos jugadores conducen los autobuses. Todos los demás van a pie y tienen que sobrevivir a los atropellos hasta que termine la ronda.',
      'Inspirado en el mapa minijuego buses_from_hell de Counter-Strike: Source.',
    ],
    howToPlay: [
      'Corredores: no dejes de moverte, usa las coberturas y nunca te quedes en la carretera.',
      'Conductores: atropella a tantos corredores como puedas antes de que se acabe el tiempo.',
    ],
    modes: ['Conductores contra corredores'],
    inspiredBy: 'buses_from_hell, un mapa minijuego de Counter-Strike: Source',
  },
  'smash-copter': {
    tagline: 'Mantente en plataformas inestables mientras un cañón te lanza objetos desde el cielo.',
    summary: [
      'Los jugadores aparecen en plataformas en equilibrio sobre un único pilar, mientras un cañón en el centro dispara objetos al aire. Lo que sube baja, y puede tirarte al vacío.',
      'Sobrevive en solitario o en equipo, según cómo esté configurado el servidor. Inspirado en el mapa minijuego mg_3k_smash_lego_copter de Counter-Strike: Source.',
    ],
    howToPlay: [
      'Vigila el cielo y esquiva todo lo que lance el cañón.',
      'No te caigas de tu plataforma.',
      'Sé el último jugador, o equipo, en pie.',
    ],
    modes: ['Supervivencia en solitario', 'Supervivencia por equipos'],
    inspiredBy: 'mg_3k_smash_lego_copter, un mapa minijuego de Counter-Strike: Source',
  },
  'zombie-zone': {
    tagline: 'Supervivencia zombi cooperativa: escapa por la ciudad o sobrevive a oleadas.',
    summary: [
      'Un juego cooperativo de zombis. Abre paso por una ciudad de noche de un refugio al siguiente, o defiende una escuela, un centro comercial o un campo de béisbol durante oleadas de una horda dirigida con infectados especiales.',
      'Los zombis sueltan cajas con efectos aleatorios, unos buenos y otros muy malos.',
    ],
    howToPlay: [
      'Manteneos juntos y cubríos las espaldas.',
      'En Exodus, llega a la siguiente sala segura; en Survival, sobrevive a oleadas.',
      'Arriésgate con las cajas, si te atreves.',
    ],
    modes: ['Supervivencia cooperativa', 'Exodus'],
    inspiredBy: "Left 4 Dead y los servidores de zombis de Counter-Strike: Source, con los conceptos y objetivos muy reelaborados",
  },
  'hide-n-seek': {
    tagline: 'Escóndete como tú mismo; cada escondido atrapado se une a la caza.',
    summary: [
      'La mayoría de los jugadores se esconde con su propio avatar mientras uno o dos buscadores cuentan con la pantalla en negro y luego salen a buscar.',
      'Un buscador atrapa a un escondido al tocarlo, y cada escondido atrapado se convierte también en buscador, así que la caza crece a lo largo de la ronda.',
    ],
    howToPlay: [
      'Escondidos: busca un sitio antes de que termine la cuenta y mantente fuera de la vista.',
      'Buscadores: toca a un escondido para atraparlo.',
      'El último escondido que quede gana la ronda.',
    ],
    modes: ['Escondite'],
    inspiredBy: "Hide and Seek, un modo de juego de Garry's Mod que nunca fue tan popular como merecía, pero era muy divertido",
  },
  'prop-hunt': {
    tagline: 'Disfrázate de mueble y quédate quieto mientras cazadores con los ojos vendados te buscan.',
    summary: [
      'La mayoría de los jugadores son objetos que se esconden convirtiéndose en muebles, plantas o rocas y quedándose quietos. El resto son cazadores, con los ojos vendados al principio, que tienen unos minutos para encontrarlos.',
      'Cada fallo le cuesta salud al cazador, así que disparar a todas las sillas de la sala no es un plan.',
    ],
    howToPlay: [
      'Objetos: conviértete en algo que encaje en la sala y no te muevas.',
      'Cazadores: dispara a lo que parezca fuera de lugar; los fallos duelen.',
    ],
    modes: ['Objetos contra cazadores'],
    inspiredBy: "Prop Hunt de Garry's Mod",
  },
  'murder-mystery': {
    tagline: 'Todos se ven iguales. Uno de ellos lleva un cuchillo.',
    summary: [
      'Un juego 3D de deducción social en el que todos se ven iguales. Uno o dos jugadores son asesinos con un cuchillo, uno o dos testigos llevan una pistola de un solo disparo, y nadie sabe el rol de los demás.',
      "Averigua quién es quién antes de que lleguen hasta ti. Inspirado en el antiguo modo de juego Murder de Garry's Mod.",
    ],
    howToPlay: [
      'Asesino: elimina a la gente sin que te vean.',
      'Testigo armado: tienes un solo disparo, así que haz que cuente.',
      'Todos los demás: reúne pistas y sigue con vida.',
    ],
    modes: ['Deducción social'],
    inspiredBy: "Murder, un modo de juego de Garry's Mod",
  },
  'deathrun': {
    tagline: 'Recorre un circuito lleno de trampas mientras los activadores pulsan todos los botones.',
    summary: [
      'La mayoría de los jugadores son corredores que avanzan por un circuito largo lleno de trampas, mientras uno o varios activadores, a su lado, tienen un botón para cada trampa e intentan matarlos.',
      'Quien llega al final recibe un arma y se enfrenta a los activadores. Inspirado en el mod DeathRun de Counter-Strike.',
    ],
    howToPlay: [
      'Corredores: vigila al activador y calcula el momento de pasar cada trampa.',
      'Activadores: pulsa cada botón de trampa justo en el peor momento.',
      'Llega al final para armarte y darle la vuelta a la partida.',
    ],
    modes: ['Corredores contra activadores'],
    inspiredBy: 'DeathRun, un mod de Counter-Strike',
  },
  'wipeout': {
    tagline: 'Circuitos de obstáculos sobre el agua: brazos giratorios, bolas enormes y una pelea en la meta.',
    summary: [
      'Compite en circuitos de obstáculos construidos sobre el agua: brazos giratorios, bolas enormes, troncos rodantes, martillos y suelos que se hunden. Si caes al agua, vuelves al último punto de control.',
      'Si más de un jugador llega a la meta, se enfrentan en una arena aleatoria hasta que solo queda uno. Inspirado en el clásico programa de televisión.',
    ],
    howToPlay: [
      'Calcula tus saltos para pasar cada obstáculo.',
      'Si caes, reapareces en el último punto de control.',
      'Llega a la meta y gana la final en la arena.',
    ],
    modes: ['Carrera de obstáculos', 'Final en la arena'],
    inspiredBy: 'Wipeout, el programa de televisión',
  },
  'dangerous-delivery': {
    tagline: 'Transporta cargas por carreteras de montaña sin barandillas. Cuanto más riesgo, más paga.',
    summary: [
      'Conduce camiones cargados por carreteras de montaña sin barandillas, entre nieve, lluvia, viento y desprendimientos, y entrega la carga en el depósito.',
      'Cuanto más peligrosa es la entrega, mejor se paga, y el dinero sirve para comprar camiones más grandes y mejoras.',
    ],
    howToPlay: [
      'Acepta un trabajo; los transportes más difíciles pagan más.',
      'Lleva el camión y su carga al depósito de una pieza.',
      'Gasta tus ganancias en camiones más grandes y mejoras.',
    ],
    modes: ['Entregas'],
  },
  'look-at-me': {
    tagline: 'Una casa oscura, de 32 niveles de profundidad, y las brujas que recorren sus habitaciones.',
    summary: [
      'Un juego de semiterror. Avanza por una casa oscura de 32 niveles de profundidad mientras las brujas recorren sus habitaciones. Son NPC que patrullan cada nivel, y cada nivel es más difícil que el anterior.',
      'Encuentra lo que abre la siguiente puerta antes de que una de ellas te mire demasiado tiempo. Admite mapas personalizados.',
    ],
    howToPlay: [
      'Encuentra el objetivo que abre la siguiente puerta.',
      'Mantente fuera de la vista de las brujas; no dejes que una te mire durante mucho rato.',
      'Supera los 32 niveles.',
    ],
    modes: ['Progresión por niveles'],
  },
}
