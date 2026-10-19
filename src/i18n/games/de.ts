import type { GameText } from './en'
import type { GameSlug } from '../../data/games'

export const de: Record<GameSlug, GameText> = {
  'arena': {
    tagline: 'Schnelles Ego-Deathmatch mit GunGame und klassischen Surf-Deathmatch-Maps.',
    summary: [
      'Ein schneller Deathmatch-Shooter aus der Ich-Perspektive. Wählen Sie eine Ausrüstung, kaufen Sie Waffen in den Kaufzonen und stürzen Sie sich in ein Match aus Team Deathmatch, Jeder gegen Jeden oder GunGame.',
      'Arena spielt außerdem klassische Surf-Deathmatch-Maps aus älteren Counter-Strike-Spielen: Man kämpft, während man mit hohem Tempo Rampen entlangsurft.',
    ],
    howToPlay: [
      'Wählen Sie eine Ausrüstung oder kaufen Sie Waffen in einer Kaufzone.',
      'Fraggen Sie sich an die Spitze der Rangliste, bevor die Zeit abläuft.',
      'Im GunGame tauscht jeder Kill Ihre Waffe gegen die nächste der Leiter.',
    ],
    modes: ['Team Deathmatch', 'Jeder gegen Jeden', 'GunGame', 'Surf Deathmatch'],
    inspiredBy: 'Deathmatch- und Surf-Kampf-Server aus Counter-Strike: Source',
  },
  'g2gfast': {
    tagline: 'Bunny-Hop- und Surf-Zeitrennen mit Source-Bewegung und Bestenlisten.',
    summary: [
      'Ein Bunny-Hop- und Surf-Zeitspiel mit Source-Bewegung, Start- und Zielzonen und Bestenlisten. Rennen Sie auf klassischen Maps gegen die Uhr und jagen Sie Weltrekorde.',
      'Wer in Counter-Strike auf Surf-Timer- oder Bunny-Hop-Servern gespielt hat, weiß bereits, wie es funktioniert.',
    ],
    howToPlay: [
      'Verlassen Sie die Startzone, um die Zeit zu starten.',
      'Strafen und springen Sie, um das Tempo zu halten; surfen Sie die Rampen, ohne herunterzufallen.',
      'Erreichen Sie die Zielzone und unterbieten Sie dann Ihre Zeit.',
    ],
    modes: ['Surf', 'Bunny Hop', 'KZ'],
    inspiredBy: 'Surf-Timer- und Bunny-Hop-Server aus Counter-Strike: Source',
  },
  'playground': {
    tagline: 'Eine Physik-Sandbox: Props, NPCs und Waffen spawnen und bauen, was Sie wollen.',
    summary: [
      'Eine Physik-Sandbox. Halten Sie Q, um das Spawn-Menü zu öffnen und Props, NPCs und Waffen abzusetzen, greifen Sie dann alles mit der Physik- und der Gravitationskanone und bauen Sie, was Sie wollen.',
      "Es gibt keine Regeln. Garry's Mod war eine große Inspiration, falls es Ihnen nicht aufgefallen ist.",
    ],
    howToPlay: [
      'Halten Sie Q, um das Spawn-Menü zu öffnen.',
      'Greifen, werfen und fixieren Sie Props mit der Physik- und der Gravitationskanone.',
      'Bauen, kämpfen oder herumalbern: Der Server gehört Ihnen.',
    ],
    modes: ['Sandbox'],
    inspiredBy: "Garry's Mod",
  },
  'hungario': {
    tagline: 'Steuern Sie ein hungriges Monster, fressen Sie, um zu wachsen, und überleben Sie alle anderen.',
    summary: [
      'Ein 2D-Multiplayerspiel, in dem Sie als kleines, hungriges Monster beginnen. Fressen Sie Futter und kleinere Spieler, um zu wachsen, und meiden Sie jeden, der größer ist als Sie.',
      'Teilen Sie sich, um sich auf Beute zu stürzen, stoßen Sie Masse aus, um sie zu ködern, und versuchen Sie, an der Spitze der Rangliste zu enden. Inspiriert vom klassischen Browserspiel Agar.io.',
    ],
    howToPlay: [
      'Bewegen Sie sich mit der Maus: nah am Monster langsam, weit weg schnell.',
      'Leertaste zum Teilen und Hechten, W zum Ausstoßen von Masse.',
      'Fressen Sie jeden, der kleiner ist als Sie; fliehen Sie vor jedem, der größer ist.',
    ],
    modes: ['Jeder gegen Jeden', 'Teilen'],
    inspiredBy: 'Agar.io',
  },
  'buses-from-hell': {
    tagline: 'Überleben Sie einen oder mehrere verrückte Busfahrer, die Sie überfahren wollen.',
    summary: [
      'Ein oder zwei Spieler fahren die Busse. Alle anderen sind zu Fuß unterwegs und müssen bis zum Rundenende überleben, ohne überfahren zu werden.',
      'Inspiriert von der Counter-Strike: Source-Minispiel-Map buses_from_hell.',
    ],
    howToPlay: [
      'Läufer: Bleiben Sie in Bewegung, nutzen Sie Deckung und stehen Sie nie auf der Straße.',
      'Fahrer: Überfahren Sie so viele Läufer wie möglich, bevor die Zeit abläuft.',
    ],
    modes: ['Fahrer gegen Läufer'],
    inspiredBy: 'buses_from_hell, eine Minispiel-Map aus Counter-Strike: Source',
  },
  'smash-copter': {
    tagline: 'Bleiben Sie auf wackeligen Plattformen, während eine Kanone Props auf Sie herabregnen lässt.',
    summary: [
      'Die Spieler starten auf Plattformen, die auf einzelnen Säulen balancieren, während eine Kanone in der Mitte Props in die Luft schießt. Was hochgeht, kommt wieder herunter und kann Sie hinunterstoßen.',
      'Überleben Sie allein oder im Team, je nach Servereinstellung. Inspiriert von der Counter-Strike: Source-Minispiel-Map mg_3k_smash_lego_copter.',
    ],
    howToPlay: [
      'Beobachten Sie den Himmel und weichen Sie allem aus, was die Kanone abfeuert.',
      'Fallen Sie nicht von Ihrer Plattform.',
      'Seien Sie der letzte Spieler oder das letzte Team auf den Beinen.',
    ],
    modes: ['Solo-Überleben', 'Team-Überleben'],
    inspiredBy: 'mg_3k_smash_lego_copter, eine Minispiel-Map aus Counter-Strike: Source',
  },
  'zombie-zone': {
    tagline: 'Kooperatives Zombie-Überleben: Fliehen Sie durch die Stadt oder halten Sie zehn Wellen durch.',
    summary: [
      'Ein kooperatives Zombiespiel. Kämpfen Sie sich nachts durch eine Stadt von einem Unterschlupf zum nächsten, oder verteidigen Sie eine Schule, ein Einkaufszentrum oder ein Baseballstadion gegen zehn Wellen einer gelenkten Horde mit speziellen Infizierten.',
      'Zombies lassen Kisten mit zufälligen Effekten fallen, manche gut, manche sehr schlecht.',
    ],
    howToPlay: [
      'Bleiben Sie zusammen und decken Sie einander.',
      'In Exodus erreichen Sie den nächsten sicheren Raum; in Survival halten Sie zehn Wellen durch.',
      'Riskieren Sie es mit den Kisten, wenn Sie sich trauen.',
    ],
    modes: ['Koop-Survival', 'Exodus'],
    inspiredBy: 'Left 4 Dead und Zombie-Server aus Counter-Strike: Source',
  },
  'hide-n-seek': {
    tagline: 'Verstecken Sie sich als Sie selbst; jeder gefundene Versteckte schließt sich der Jagd an.',
    summary: [
      'Die meisten Spieler verstecken sich mit ihrem eigenen Avatar, während ein oder zwei Sucher bei schwarzem Bildschirm zählen und sich dann auf die Suche machen.',
      'Ein Sucher fängt einen Versteckten durch Berührung, und jeder gefangene Versteckte wird ebenfalls zum Sucher, sodass die Jagd im Verlauf der Runde wächst.',
    ],
    howToPlay: [
      'Versteckte: Finden Sie ein Versteck, bevor der Countdown endet, und bleiben Sie außer Sicht.',
      'Sucher: Berühren Sie einen Versteckten, um ihn zu fangen.',
      'Der letzte übrige Versteckte gewinnt die Runde.',
    ],
    modes: ['Verstecken'],
  },
  'prop-hunt': {
    tagline: 'Tarnen Sie sich als Möbelstück und bleiben Sie still, während Jäger mit verbundenen Augen suchen.',
    summary: [
      'Die meisten Spieler sind Props, die sich verstecken, indem sie sich in Möbel, Pflanzen oder Felsen verwandeln und still halten. Der Rest sind Jäger, die zu Beginn die Augen verbunden haben und einige Minuten Zeit haben, sie zu finden.',
      'Jeder Fehlschuss kostet einen Jäger Gesundheit, daher ist es kein Plan, auf jeden Stuhl im Raum zu schießen.',
    ],
    howToPlay: [
      'Props: Werden Sie zu etwas, das in den Raum passt, und bewegen Sie sich dann nicht mehr.',
      'Jäger: Schießen Sie auf alles, was fehl am Platz wirkt; Fehlschüsse tun weh.',
    ],
    modes: ['Props gegen Jäger'],
    inspiredBy: "Prop Hunt aus Garry's Mod",
  },
  'murder-mystery': {
    tagline: 'Alle sehen gleich aus. Einer von ihnen hat ein Messer.',
    summary: [
      'Ein soziales 3D-Deduktionsspiel, in dem alle gleich aussehen. Ein oder zwei Spieler sind Mörder mit einem Messer, ein oder zwei Unbeteiligte tragen eine Waffe mit nur einem Schuss, und niemand kennt die Rolle der anderen.',
      "Finden Sie heraus, wer wer ist, bevor man Sie erreicht. Inspiriert vom alten Spielmodus Murder in Garry's Mod.",
    ],
    howToPlay: [
      'Mörder: Schalten Sie Leute aus, ohne gesehen zu werden.',
      'Bewaffneter Unbeteiligter: Sie haben nur einen Schuss, also lassen Sie ihn zählen.',
      'Alle anderen: Sammeln Sie Hinweise und bleiben Sie am Leben.',
    ],
    modes: ['Soziale Deduktion'],
    inspiredBy: "Murder, ein Spielmodus aus Garry's Mod",
  },
  'deathrun': {
    tagline: 'Laufen Sie einen Parcours voller Fallen, während die Aktivatoren jeden Knopf drücken.',
    summary: [
      'Die meisten Spieler sind Läufer, die einen langen Parcours voller Fallen entlangrennen, während ein oder mehrere Aktivatoren daneben stehen, einen Knopf für jede Falle haben und versuchen, sie zu töten.',
      'Wer das Ziel erreicht, bekommt eine Waffe und kämpft gegen die Aktivatoren. Inspiriert von der DeathRun-Mod für Counter-Strike.',
    ],
    howToPlay: [
      'Läufer: Beobachten Sie den Aktivator und timen Sie Ihren Weg an jeder Falle vorbei.',
      'Aktivatoren: Drücken Sie jeden Fallenknopf genau im falschen Moment.',
      'Erreichen Sie das Ziel, um sich zu bewaffnen und das Blatt zu wenden.',
    ],
    modes: ['Läufer gegen Aktivatoren'],
    inspiredBy: 'DeathRun, eine Counter-Strike-Mod',
  },
  'wipeout': {
    tagline: 'Hindernisparcours über Wasser: Schwenkarme, riesige Bälle und ein Kampf im Ziel.',
    summary: [
      'Rennen Sie über Hindernisparcours über dem Wasser: Schwenkarme, riesige Bälle, rollende Baumstämme, Hämmer und Böden, die wegbrechen. Wer hineinfällt, startet am letzten Checkpoint neu.',
      'Erreichen mehrere Spieler das Ziel, kämpfen sie in einer zufälligen Arena, bis nur noch einer übrig ist. Inspiriert von der klassischen Fernsehshow.',
    ],
    howToPlay: [
      'Timen Sie Ihre Sprünge an jedem Hindernis vorbei.',
      'Wer hineinfällt, startet am letzten Checkpoint neu.',
      'Erreichen Sie das Ziel und gewinnen Sie dann das Arena-Finale.',
    ],
    modes: ['Hindernisrennen', 'Arena-Finale'],
    inspiredBy: 'Wipeout, die Fernsehshow',
  },
  'dangerous-delivery': {
    tagline: 'Transportieren Sie Ladungen über Bergstraßen ohne Leitplanken. Riskantere Fahrten zahlen mehr.',
    summary: [
      'Fahren Sie beladene Lkw über Bergstraßen ohne Leitplanken, durch Schnee, Regen, Wind und Steinschlag, und liefern Sie die Ladung am Depot ab.',
      'Je gefährlicher die Lieferung, desto besser die Bezahlung, und vom Geld kaufen Sie größere Lkw und Upgrades.',
    ],
    howToPlay: [
      'Nehmen Sie einen Auftrag an; schwierigere Transporte zahlen mehr.',
      'Bringen Sie Lkw und Ladung heil zum Depot.',
      'Geben Sie Ihre Einnahmen für größere Lkw und Upgrades aus.',
    ],
    modes: ['Lieferfahrten'],
  },
  'look-at-me': {
    tagline: 'Ein dunkles Haus mit 32 Ebenen und die Hexen, die durch seine Räume wandern.',
    summary: [
      'Ein Semi-Horror-Spiel. Kämpfen Sie sich durch ein dunkles Haus mit 32 Ebenen, während Hexen durch die Räume wandern. Sie sind NPCs, die jede Ebene patrouillieren, und jede Ebene ist schwerer als die vorige.',
      'Finden Sie, was die nächste Tür öffnet, bevor eine von ihnen Sie zu lange ansieht. Eigene Maps werden unterstützt.',
    ],
    howToPlay: [
      'Finden Sie das Ziel, das die nächste Tür öffnet.',
      'Bleiben Sie außer Sicht der Hexen; lassen Sie nicht zu, dass eine Sie lange ansieht.',
      'Schaffen Sie alle 32 Ebenen.',
    ],
    modes: ['Ebenenfortschritt'],
  },
}
