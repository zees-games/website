import type { GameText } from './en'
import type { GameSlug } from '../../data/games'

export const fr: Record<GameSlug, GameText> = {
  'arena': {
    tagline: 'Deathmatch nerveux en vue à la première personne, avec GunGame et les classiques cartes de Surf Deathmatch.',
    summary: [
      'Un jeu de tir deathmatch nerveux à la première personne. Choisissez un équipement, achetez des armes dans les zones d’achat et lancez-vous dans une partie de team deathmatch, de chacun pour soi ou de GunGame.',
      'Arena propose aussi les cartes classiques de Surf Deathmatch des anciens jeux Counter-Strike : on se bat en surfant à toute vitesse sur des rampes.',
    ],
    howToPlay: [
      'Choisissez un équipement, ou achetez des armes dans une zone d’achat.',
      'Éliminez vos adversaires pour grimper en tête du classement avant la fin du temps imparti.',
      'En GunGame, chaque élimination remplace votre arme par la suivante dans l’échelle.',
    ],
    modes: ['Team Deathmatch', 'Chacun pour soi', 'GunGame', 'Surf Deathmatch'],
    inspiredBy: 'Les serveurs de deathmatch et de combat surf de Counter-Strike: Source',
  },
  'g2gfast': {
    tagline: 'Courses chronométrées de bunny hop et de surf, avec déplacements à la Source et classements.',
    summary: [
      'Un jeu chronométré de bunny hop et de surf avec des déplacements à la Source, des zones de départ et d’arrivée et des classements. Affrontez le chrono sur des cartes classiques et visez les records du monde.',
      'Si vous avez joué sur des serveurs Surf Timer ou Bunny Hop dans Counter-Strike, vous savez déjà comment ça se joue.',
    ],
    howToPlay: [
      'Quittez la zone de départ pour lancer le chrono.',
      'Faites des strafes et sautez pour garder votre vitesse ; surfez sur les rampes sans tomber.',
      'Atteignez la zone d’arrivée, puis battez votre temps.',
    ],
    modes: ['Surf', 'Bunny Hop', 'KZ'],
    inspiredBy: 'Les serveurs Surf Timer et Bunny Hop de Counter-Strike: Source',
  },
  'playground': {
    tagline: 'Un bac à sable physique : faites apparaître des objets, des PNJ et des armes et construisez ce que vous voulez.',
    summary: [
      'Un bac à sable physique. Maintenez Q pour ouvrir le menu d’apparition et déposez des objets, des PNJ et des armes, puis saisissez-les avec les pistolets physique et gravitationnel et construisez ce que vous voulez.',
      "Il n’y a aucune règle. Garry's Mod a été une grande source d’inspiration, au cas où vous ne l’auriez pas remarqué.",
    ],
    howToPlay: [
      'Maintenez Q pour ouvrir le menu d’apparition.',
      'Saisissez, lancez et figez des objets avec les pistolets physique et gravitationnel.',
      'Construisez, battez-vous ou amusez-vous : le serveur est à vous.',
    ],
    modes: ['Sandbox'],
    inspiredBy: "Garry's Mod",
  },
  'hungario': {
    tagline: 'Dirigez un monstre affamé, mangez pour grandir et survivez à tous les autres.',
    summary: [
      'Un jeu multijoueur en 2D où vous commencez en petit monstre affamé. Mangez de la nourriture et des joueurs plus petits pour grandir, et évitez tous ceux qui sont plus gros que vous.',
      'Divisez-vous pour foncer sur vos proies, éjectez de la masse pour les appâter et tâchez de finir en tête du classement. Inspiré du jeu de navigateur classique Agar.io.',
    ],
    howToPlay: [
      'Déplacez-vous à la souris : près de votre monstre, il est lent ; loin, il est rapide.',
      'Appuyez sur Espace pour vous diviser et foncer, sur W pour éjecter de la masse.',
      'Mangez tous ceux qui sont plus petits que vous ; fuyez ceux qui sont plus gros.',
    ],
    modes: ['Chacun pour soi', 'Division'],
    inspiredBy: 'Agar.io',
  },
  'buses-from-hell': {
    tagline: 'Survivez à un ou plusieurs chauffeurs de bus déchaînés qui veulent vous écraser.',
    summary: [
      'Un ou deux joueurs conduisent les bus. Tous les autres sont à pied et doivent éviter de se faire écraser jusqu’à la fin de la manche.',
      'Inspiré de la carte mini-jeu buses_from_hell de Counter-Strike: Source.',
    ],
    howToPlay: [
      'Coureurs : ne cessez pas de bouger, servez-vous des abris et ne restez jamais sur la route.',
      'Chauffeurs : écrasez le plus de coureurs possible avant la fin du temps.',
    ],
    modes: ['Chauffeurs contre coureurs'],
    inspiredBy: 'buses_from_hell, une carte mini-jeu de Counter-Strike: Source',
  },
  'smash-copter': {
    tagline: 'Restez sur des plateformes instables pendant qu’un canon vous bombarde d’objets.',
    summary: [
      'Les joueurs apparaissent sur des plateformes en équilibre sur un seul pilier, tandis qu’un canon au centre projette des objets dans les airs. Ce qui monte redescend, et peut vous faire tomber.',
      'Survivez seul ou en équipe, selon la configuration du serveur. Inspiré de la carte mini-jeu mg_3k_smash_lego_copter de Counter-Strike: Source.',
    ],
    howToPlay: [
      'Surveillez le ciel et esquivez tout ce que le canon lance.',
      'Ne tombez pas de votre plateforme.',
      'Soyez le dernier joueur, ou la dernière équipe, debout.',
    ],
    modes: ['Survie en solo', 'Survie en équipe'],
    inspiredBy: 'mg_3k_smash_lego_copter, une carte mini-jeu de Counter-Strike: Source',
  },
  'zombie-zone': {
    tagline: 'Survie zombie en coopération : fuyez à travers la ville ou survivez aux vagues.',
    summary: [
      'Un jeu de zombies en coopération. Frayez-vous un chemin dans une ville de nuit, d’un abri à l’autre, ou défendez une école, un centre commercial ou un terrain de baseball face aux vagues d’une horde dirigée avec des infectés spéciaux.',
      'Les zombies laissent tomber des caisses aux effets aléatoires, certains bons et d’autres très mauvais.',
    ],
    howToPlay: [
      'Restez groupés et couvrez-vous mutuellement.',
      'Dans Exodus, atteignez la prochaine zone sûre ; dans Survival, survivez aux vagues.',
      'Tentez votre chance avec les caisses, si vous l’osez.',
    ],
    modes: ['Survie en coopération', 'Exodus'],
    inspiredBy: "Left 4 Dead et les serveurs zombies de Counter-Strike: Source, avec des concepts et des objectifs largement retravaillés",
  },
  'hide-n-seek': {
    tagline: 'Cachez-vous sous votre propre apparence ; chaque caché trouvé rejoint la chasse.',
    summary: [
      'La plupart des joueurs se cachent avec leur propre avatar, pendant qu’un ou deux chercheurs comptent devant un écran noir, puis partent à leur recherche.',
      'Un chercheur attrape un caché en le touchant, et chaque caché attrapé devient lui aussi chercheur : la chasse grossit au fil de la manche.',
    ],
    howToPlay: [
      'Cachés : trouvez une cachette avant la fin du décompte et restez hors de vue.',
      'Chercheurs : touchez un caché pour l’attraper.',
      'Le dernier caché restant remporte la manche.',
    ],
    modes: ['Cache-cache'],
    inspiredBy: "Hide and Seek, un mode de jeu de Garry's Mod qui n’a jamais été aussi populaire qu’il le méritait, mais qui était très amusant",
  },
  'prop-hunt': {
    tagline: 'Déguisez-vous en meuble et restez immobile pendant que des chasseurs aux yeux bandés vous cherchent.',
    summary: [
      'La plupart des joueurs sont des objets qui se cachent en se transformant en meubles, en plantes ou en rochers et en restant immobiles. Les autres sont des chasseurs, aux yeux bandés au départ, qui ont quelques minutes pour les trouver.',
      'Chaque erreur coûte de la santé à un chasseur : tirer sur toutes les chaises de la pièce n’est donc pas une stratégie.',
    ],
    howToPlay: [
      'Objets : devenez quelque chose qui a sa place dans la pièce, puis ne bougez plus.',
      'Chasseurs : tirez sur ce qui semble déplacé ; les erreurs font mal.',
    ],
    modes: ['Objets contre chasseurs'],
    inspiredBy: "Prop Hunt de Garry's Mod",
  },
  'murder-mystery': {
    tagline: 'Tout le monde se ressemble. L’un d’eux a un couteau.',
    summary: [
      'Un jeu 3D de déduction sociale où tout le monde se ressemble. Un ou deux joueurs sont des meurtriers armés d’un couteau, un ou deux témoins portent une arme à un seul coup, et personne ne connaît le rôle des autres.',
      "Découvrez qui est qui avant qu’on ne vous atteigne. Inspiré de l’ancien mode de jeu Murder de Garry's Mod.",
    ],
    howToPlay: [
      'Meurtrier : éliminez les gens sans vous faire voir.',
      'Témoin armé : vous n’avez qu’un seul tir, alors faites-le compter.',
      'Tous les autres : rassemblez des indices et restez en vie.',
    ],
    modes: ['Déduction sociale'],
    inspiredBy: "Murder, un mode de jeu de Garry's Mod",
  },
  'deathrun': {
    tagline: 'Parcourez un circuit piégé pendant que les activateurs appuient sur tous leurs boutons.',
    summary: [
      'La plupart des joueurs sont des coureurs qui s’élancent sur un long parcours rempli de pièges, tandis qu’un ou plusieurs activateurs, postés à côté, disposent d’un bouton pour chaque piège et tentent de les tuer.',
      'Celui qui atteint l’arrivée reçoit une arme et affronte les activateurs. Inspiré du mod DeathRun de Counter-Strike.',
    ],
    howToPlay: [
      'Coureurs : surveillez l’activateur et chronométrez votre passage devant chaque piège.',
      'Activateurs : appuyez sur chaque bouton de piège au pire moment possible.',
      'Atteignez l’arrivée pour vous armer et renverser la situation.',
    ],
    modes: ['Coureurs contre activateurs'],
    inspiredBy: 'DeathRun, un mod de Counter-Strike',
  },
  'wipeout': {
    tagline: 'Parcours d’obstacles au-dessus de l’eau : bras balayeurs, grosses boules et combat final.',
    summary: [
      'Courez sur des parcours d’obstacles construits au-dessus de l’eau : bras balayeurs, grosses boules, rondins roulants, marteaux et sols qui s’effondrent. Tomber à l’eau vous renvoie au dernier point de contrôle.',
      "Si plusieurs joueurs franchissent la ligne, ils s’affrontent dans une arène aléatoire jusqu’à ce qu’il n’en reste qu’un. Inspiré de l’émission télévisée classique et des cartes de parcours de Counter-Strike: Source.",
    ],
    howToPlay: [
      'Chronométrez vos sauts pour passer chaque obstacle.',
      'Si vous tombez, vous repartez du dernier point de contrôle.',
      'Terminez le parcours, puis remportez la finale dans l’arène.',
    ],
    modes: ['Course d’obstacles', 'Finale en arène'],
    inspiredBy: "Wipeout, l’émission télévisée, et les cartes de parcours de Counter-Strike: Source",
  },
  'dangerous-delivery': {
    tagline: 'Transportez des chargements sur des routes de montagne sans garde-fou. Plus c’est risqué, mieux ça paie.',
    summary: [
      'Conduisez des camions chargés sur des routes de montagne sans garde-fou, sous la neige, la pluie, le vent et les chutes de pierres, et livrez le chargement au dépôt.',
      'Plus la livraison est dangereuse, mieux elle est payée, et l’argent sert à acheter des camions plus gros et des améliorations.',
    ],
    howToPlay: [
      'Acceptez une mission ; les transports difficiles paient plus.',
      'Amenez le camion et son chargement au dépôt en un seul morceau.',
      'Dépensez vos gains en camions plus gros et en améliorations.',
    ],
    modes: ['Livraisons'],
  },
  'look-at-me': {
    tagline: "Deux maisons sombres, cinquante niveaux, et des sorcières dans chaque pièce.",
    summary: [
      "Un jeu semi-horrifique. Frayez-vous un chemin à travers deux maisons sombres, The House (32 niveaux) et The Asylum (18), pendant que des sorcières arpentent leurs pièces. Chaque niveau est une carte différente, avec ses propres pièces, ses portes verrouillées et ses rondes de sorcières, et chacun est plus difficile que le précédent : une sorcière au début, six plus rapides et plus perçantes à la fin.",
      "Trouvez ce qui ouvre la porte suivante (une clé, un fusible, le code d’une note, de l’eau pour un feu) avant que l’une d’elles ne vous regarde trop longtemps. Un serveur joue une maison à la fois, et les joueurs votent pour la suivante. Les cartes personnalisées sont prises en charge.",
    ],
    howToPlay: [
      "Trouvez ce qui ouvre la porte suivante : une clé, un fusible, un outil ou un code.",
      'Restez hors de vue des sorcières ; ne laissez pas l’une d’elles vous regarder longtemps.',
      "Terminez tous les niveaux d’une maison pour gagner une couronne.",
    ],
    modes: ['Progression par niveaux'],
  },
}
