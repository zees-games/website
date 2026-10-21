import type { GameText } from './en'
import type { GameSlug } from '../../data/games'

export const nl: Record<GameSlug, GameText> = {
  'arena': {
    tagline: "Snelle first-person deathmatch met GunGame en klassieke Surf Deathmatch-maps.",
    summary: [
      "Een snelle first-person deathmatchshooter. Kies een loadout, koop wapens in de koopzones en stort je in een potje team deathmatch, free-for-all of GunGame.",
      "In Arena speel je ook klassieke Surf Deathmatch-maps uit oudere Counter-Strike-games: je vecht terwijl je op snelheid over ramps surft.",
    ],
    howToPlay: [
      "Kies een loadout, of koop wapens in een koopzone.",
      "Frag je een weg naar de top van het scorebord voordat de timer afloopt.",
      "In GunGame ruilt elke kill je wapen in voor het volgende uit de ladder.",
    ],
    modes: [
      "Team Deathmatch",
      "Free-for-all",
      "GunGame",
      "Surf Deathmatch",
    ],
    inspiredBy: "Deathmatch- en surfgevechtservers van Counter-Strike: Source",
  },
  'g2gfast': {
    tagline: "Bunny hop- en surftimerruns met Source-achtige besturing en leaderboards.",
    summary: [
      "Een bunny hop- en surftimergame met Source-achtige besturing, start- en eindzones en leaderboards. Race tegen de klok door klassieke maps en jaag op wereldrecords.",
      "Als je Surf Timer- of Bunny Hop-servers in Counter-Strike hebt gespeeld, weet je al hoe het werkt.",
    ],
    howToPlay: [
      "Verlaat de startzone om de timer te starten.",
      "Strafe en spring om je snelheid te houden; surf over de ramps zonder eraf te vallen.",
      "Bereik de eindzone en verbeter dan je tijd.",
    ],
    modes: [
      "Surf",
      "Bunny Hop",
      "KZ",
    ],
    inspiredBy: "Surf Timer- en Bunny Hop-servers van Counter-Strike: Source",
  },
  'playground': {
    tagline: "Een physics-sandbox: spawn props, NPC's en wapens en bouw wat je maar wilt.",
    summary: [
      "Een physics-sandbox. Houd Q ingedrukt om het spawnmenu te openen en laat props, NPC's en wapens verschijnen. Pak dingen daarna op met het physics- en het gravity-geweer en bouw wat je maar wilt.",
      "Er zijn geen regels. Garry's Mod was een grote inspiratiebron, voor het geval je dat nog niet had gemerkt.",
    ],
    howToPlay: [
      "Houd Q ingedrukt om het spawnmenu te openen.",
      "Pak, gooi en bevries props met het physics- en het gravity-geweer.",
      "Bouw, vecht of doe maar wat; de server is van jou.",
    ],
    modes: [
      "Sandbox",
    ],
    inspiredBy: "Garry's Mod",
  },
  'hungario': {
    tagline: "Bestuur een hongerig monster, eet om te groeien en overleef iedereen.",
    summary: [
      "Een 2D-multiplayergame waarin je begint als een klein, hongerig monster. Eet voedsel en kleinere spelers om te groeien en ontwijk iedereen die groter is dan jij.",
      "Splits om je op je prooi te storten, werp massa uit om ze te lokken en probeer bovenaan het scorebord te eindigen. Geïnspireerd door de klassieke browsergame Agar.io.",
    ],
    howToPlay: [
      "Beweeg met de muis: dicht bij je monster ga je langzaam, ver weg snel.",
      "Druk op Spatie om te splitsen en uit te vallen, op W om massa uit te werpen.",
      "Eet iedereen die kleiner is dan jij; ren weg voor iedereen die groter is.",
    ],
    modes: [
      "Free-for-all",
      "Splitsen",
    ],
    inspiredBy: "Agar.io",
  },
  'buses-from-hell': {
    tagline: "Overleef een of meer gekke buschauffeurs die je proberen te overrijden.",
    summary: [
      "Een of twee spelers besturen de bussen. Alle anderen lopen te voet en moeten overleven zonder overreden te worden tot de ronde voorbij is.",
      "Geïnspireerd door de Counter-Strike: Source-minigamemap buses_from_hell.",
    ],
    howToPlay: [
      "Lopers: blijf bewegen, gebruik dekking en ga nooit op de weg staan.",
      "Chauffeurs: overrijd zoveel mogelijk lopers voordat de tijd om is.",
    ],
    modes: [
      "Chauffeurs tegen lopers",
    ],
    inspiredBy: "buses_from_hell, een Counter-Strike: Source-minigamemap",
  },
  'smash-copter': {
    tagline: "Blijf op wankele platforms staan terwijl een kanon props op je laat regenen.",
    summary: [
      "Spelers spawnen op platforms die op enkele pilaren balanceren, terwijl een kanon in het midden props de lucht in schiet. Wat omhoog gaat, komt weer naar beneden en kan je van je platform stoten.",
      "Overleef alleen of in teams, afhankelijk van hoe de server is ingesteld. Geïnspireerd door de Counter-Strike: Source-minigamemap mg_3k_smash_lego_copter.",
    ],
    howToPlay: [
      "Houd de lucht in de gaten en ontwijk alles wat het kanon afvuurt.",
      "Val niet van je platform.",
      "Wees de laatste speler of het laatste team dat overeind staat.",
    ],
    modes: [
      "Solo overleven",
      "Teamoverleving",
    ],
    inspiredBy: "mg_3k_smash_lego_copter, een Counter-Strike: Source-minigamemap",
  },
  'zombie-zone': {
    tagline: "Coöp zombieoverleving: ontsnap door de stad of overleef golven.",
    summary: [
      "Een coöp zombiegame. Vecht je door een stad bij nacht van de ene schuilplaats naar de volgende, of verdedig een school, winkelcentrum of honkbalstadion tegen golven van een aangestuurde horde met speciale besmette zombies.",
      "Zombies laten kisten met willekeurige effecten vallen, sommige goed en sommige heel slecht.",
    ],
    howToPlay: [
      "Blijf bij elkaar en dek elkaar.",
      "Bereik in Exodus de volgende veilige kamer; overleef in Survival golven.",
      "Waag een gok met de kisten, als je durft.",
    ],
    modes: [
      "Coöp Survival",
      "Exodus",
    ],
    inspiredBy: "Left 4 Dead en zombieservers van Counter-Strike: Source, met sterk herwerkte concepten en doelen",
  },
  'hide-n-seek': {
    tagline: "Verstop je als jezelf; elke betrapte verstopper doet mee aan de jacht.",
    summary: [
      "De meeste spelers verstoppen zich als hun eigen avatar, terwijl een of twee zoekers met een zwart scherm tellen en daarna op zoek gaan.",
      "Een zoeker vangt een verstopper door hem aan te raken, en elke gevangen verstopper wordt ook zoeker, zodat de jacht in de loop van de ronde groeit.",
    ],
    howToPlay: [
      "Verstoppers: zoek een plek voordat het aftellen eindigt en blijf uit het zicht.",
      "Zoekers: raak een verstopper aan om hem te vangen.",
      "De laatste verstopper die overblijft wint de ronde.",
    ],
    modes: [
      "Verstoppertje",
    ],
    inspiredBy: "Hide and Seek, een Garry's Mod-spelmodus die nooit zo populair werd als hij verdiende, maar wel heel leuk was",
  },
  'prop-hunt': {
    tagline: "Vermom je als meubilair en blijf stilstaan terwijl geblinddoekte jagers zoeken.",
    summary: [
      "De meeste spelers zijn props die zich verstoppen door in meubels, planten of rotsen te veranderen en stil te blijven staan. De rest zijn jagers, aan het begin geblinddoekt, die een paar minuten hebben om ze te vinden.",
      "Elke foute gok kost een jager gezondheid, dus elke stoel in de kamer neerschieten is geen plan.",
    ],
    howToPlay: [
      "Props: word iets wat in de kamer thuishoort en beweeg dan niet meer.",
      "Jagers: schiet op wat misplaatst lijkt; foute gokken doen pijn.",
    ],
    modes: [
      "Props tegen jagers",
    ],
    inspiredBy: "Prop Hunt uit Garry's Mod",
  },
  'murder-mystery': {
    tagline: "Iedereen ziet er hetzelfde uit. Een van hen heeft een mes.",
    summary: [
      "Een 3D-game over sociale deductie waarin iedereen er hetzelfde uitziet. Een of twee spelers zijn moordenaars met een mes, een of twee omstanders dragen een geweer met één kogel, en niemand kent de rol van de anderen.",
      "Ontdek wie wie is voordat ze bij je zijn. Geïnspireerd door de oude spelmodus Murder in Garry's Mod.",
    ],
    howToPlay: [
      "Moordenaar: schakel mensen een voor een uit zonder gezien te worden.",
      "Gewapende omstander: je hebt één schot, dus maak het raak.",
      "Alle anderen: verzamel aanwijzingen en blijf in leven.",
    ],
    modes: [
      "Sociale deductie",
    ],
    inspiredBy: "Murder, een spelmodus van Garry's Mod",
  },
  'deathrun': {
    tagline: "Ren over een parcours vol vallen terwijl de activators elke knop indrukken die ze hebben.",
    summary: [
      "De meeste spelers zijn lopers die over een lang parcours vol vallen racen, terwijl een of meer activators ernaast staan met een knop voor elke val en proberen hen te doden.",
      "Wie het einde haalt, krijgt een wapen en vecht tegen de activators. Geïnspireerd door de DeathRun-mod voor Counter-Strike.",
    ],
    howToPlay: [
      "Lopers: let op de activator en kies je moment bij elke val.",
      "Activators: druk elke valknop precies op het slechtste moment in.",
      "Bereik het einde om je te bewapenen en het tij te keren.",
    ],
    modes: [
      "Lopers tegen activators",
    ],
    inspiredBy: "DeathRun, een Counter-Strike-mod",
  },
  'wipeout': {
    tagline: "Hindernisbanen boven water: zwaaiende armen, grote ballen en een gevecht bij de finish.",
    summary: [
      "Race over hindernisbanen boven water: zwaaiende armen, grote ballen, rollende boomstammen, hamers en vloeren die wegvallen. Wie erin valt, begint weer bij het laatste checkpoint.",
      "Als meer dan een speler finisht, vechten ze het uit in een willekeurige arena tot er nog een over is. Geïnspireerd door de klassieke tv-show en door de parcoursmaps uit Counter-Strike: Source.",
    ],
    howToPlay: [
      "Stem je sprongen af op elke hindernis.",
      "Val je erin, dan begin je weer bij het laatste checkpoint.",
      "Finish en win dan de arenafinale.",
    ],
    modes: [
      "Hindernisrace",
      "Arenafinale",
    ],
    inspiredBy: "Wipeout, de tv-show, en parcoursmaps uit Counter-Strike: Source",
  },
  'dangerous-delivery': {
    tagline: "Vervoer lading over bergwegen zonder vangrails. Riskantere ritten betalen meer.",
    summary: [
      "Rij beladen vrachtwagens over bergwegen zonder vangrails, door sneeuw, regen, wind en vallende rotsen, en lever de lading af bij het depot.",
      "Hoe gevaarlijker de levering, hoe meer het oplevert, en van het geld koop je grotere vrachtwagens en upgrades.",
    ],
    howToPlay: [
      "Neem een klus aan; zwaardere ritten betalen meer.",
      "Breng de vrachtwagen en zijn lading heelhuids naar het depot.",
      "Geef je verdiensten uit aan grotere vrachtwagens en upgrades.",
    ],
    modes: [
      "Leveringsritten",
    ],
  },
  'look-at-me': {
    tagline: "Twee donkere huizen, vijftig levels en heksen in elke kamer.",
    summary: [
      "Een semi-horrorspel. Baan je een weg door twee donkere huizen, The House (32 levels) en The Asylum (18), terwijl heksen door de kamers lopen. Elk level is een andere map met eigen kamers, gesloten deuren en heksenrondes, en elk is moeilijker dan het vorige: aan het begin één heks, aan het eind zes snellere met scherpere ogen.",
      "Vind wat de volgende deur opent (een sleutel, een zekering, een code van een briefje, water voor een brand) voordat een van hen je te lang aankijkt. Een server speelt één huis tegelijk, en de spelers stemmen over het volgende. Eigen maps worden ondersteund.",
    ],
    howToPlay: [
      "Vind wat de volgende deur opent: een sleutel, een zekering, gereedschap of een code.",
      "Blijf uit het zicht van de heksen; laat er geen lang naar je kijken.",
      "Haal alle levels van een huis en verdien een kroon.",
    ],
    modes: [
      "Levelprogressie",
    ],
  },
}
