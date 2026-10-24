import type { GameSlug } from './games'
import type { ControlGroupId, ControlLabelId } from '../i18n/controls/en'

/**
 * Each game's controls, as its in-game help screen (H) lists them, with their
 * default keys. Read from each game's key table (`*_bindings.gd`, dot-menu's
 * `DotMenuBindings`) on x-tmc-dev02; the labels are in `src/i18n/controls/`.
 *
 * A row's `keys` are alternatives, each a list of keys pressed together.
 * Key names: letters and digits as printed, `Space`, `Shift`, `Ctrl`, `Alt`,
 * `Tab`, `Esc`, `F3`, `Up`/`Down`/`Left`/`Right`, `/`, `Mouse1`/`2`/`3`,
 * `Wheel`, `WheelUp`, `WheelDown`, `Point` (the pointer), plus two shorthands:
 * `WASD` (the four movement keys as a cluster) and `1-5` (the number row).
 * The rows are tidied for the web, not changed: W, A, S and D are one row, the
 * wheel's two halves are one, and five weapon slots are one.
 *
 * Every game has self-mute (dot-chat) with the same keys as Look At Me: the menu,
 * and G / K while looking at a player. In arena, g2gfast, playground, zombie-zone
 * and dangerous-delivery G or K is also another row of the table; the site states
 * the self-mute keys for them regardless (Christian's call), the table is unchanged.
 */
export interface ControlRow { keys: string[][]; label: ControlLabelId }
export interface ControlGroup { group: ControlGroupId; rows: ControlRow[] }

export const CONTROLS: Record<GameSlug, ControlGroup[]> = {
  'arena': [
    { group: 'movement', rows: [
      { keys: [["WASD"]], label: 'move' },
      { keys: [["Space"]], label: 'jump' },
      { keys: [["Ctrl"]], label: 'duckSlide' },
      { keys: [["C"]], label: 'slide' },
      { keys: [["Alt"]], label: 'walk' },
      { keys: [["Shift"]], label: 'dash' },
      { keys: [["E"]], label: 'launchGrabAProp' },
      { keys: [["X"]], label: 'launchInAProps' },
    ] },
    { group: 'weapons', rows: [
      { keys: [["Mouse1"]], label: 'fire' },
      { keys: [["Mouse2"]], label: 'aimBashesWithRight' },
      { keys: [["F"]], label: 'bashFreezeAProp' },
      { keys: [["R"]], label: 'reload' },
      { keys: [["1"]], label: 'slot1Melee' },
      { keys: [["2"]], label: 'slot2Sidearm' },
      { keys: [["3"]], label: 'slot3Primary' },
      { keys: [["4"]], label: 'slot4Heavy' },
      { keys: [["5"]], label: 'slot5Throwable' },
      { keys: [["Wheel"]], label: 'previousOrNextWeapon' },
      { keys: [["Q"]], label: 'lastWeapon' },
      { keys: [["G"]], label: 'puntAProp' },
      { keys: [["B"]], label: 'loadout' },
    ] },
    { group: 'chat', rows: [
      { keys: [["Y"]], label: 'chat' },
      { keys: [["U"]], label: 'teamChat' },
      { keys: [["V"]], label: 'pushToTalk' },
    ] },
    { group: 'interface', rows: [
      { keys: [["Tab"]], label: 'scoreboardHold' },
      { keys: [["F5"]], label: 'firstOrThirdPerson' },
      { keys: [["H"]], label: 'helpAndControls' },
      { keys: [["M"]], label: 'changeMap' },
      { keys: [["Esc"]], label: 'menuAndSettings' },
    ] },
    { group: 'voice', rows: [
      { keys: [["Esc"]], label: 'selfMuteMenu' },
      { keys: [["G"]], label: 'lookAtAPlayer' },
      { keys: [["K"]], label: 'lookAtAPlayer2' },
    ] },
  ],
  'g2gfast': [
    { group: 'movement', rows: [
      { keys: [["WASD"]], label: 'move' },
      { keys: [["Space"], ["Wheel"]], label: 'jump' },
      { keys: [["Ctrl"]], label: 'duck' },
    ] },
    { group: 'running', rows: [
      { keys: [["R"]], label: 'restartRun' },
      { keys: [["C"]], label: 'saveCheckpoint' },
      { keys: [["V"]], label: 'goToCheckpoint' },
      { keys: [["N"]], label: 'nextStyle' },
      { keys: [["M"]], label: 'changeMap' },
      { keys: [["Z"]], label: 'zoneEditorOfflineOr' },
    ] },
    { group: 'view', rows: [
      { keys: [["F"]], label: 'flashlight' },
      { keys: [["O"]], label: 'hideOtherPlayers' },
      { keys: [["F5"]], label: 'firstThirdPerson' },
    ] },
    { group: 'communication', rows: [
      { keys: [["Y"]], label: 'chat' },
      { keys: [["U"]], label: 'teamChat' },
      { keys: [["K"]], label: 'pushToTalk' },
    ] },
    { group: 'interface', rows: [
      { keys: [["Tab"]], label: 'scoreboardHold' },
      { keys: [["H"]], label: 'helpAndControls' },
      { keys: [["F3"]], label: 'serverList' },
      { keys: [["P"]], label: 'nextHudTheme' },
      { keys: [["Esc"]], label: 'menuAndSettings' },
    ] },
    { group: 'voice', rows: [
      { keys: [["Esc"]], label: 'selfMuteMenu' },
      { keys: [["G"]], label: 'lookAtAPlayer' },
      { keys: [["K"]], label: 'lookAtAPlayer2' },
    ] },
  ],
  'playground': [
    { group: 'movement', rows: [
      { keys: [["WASD"]], label: 'move' },
      { keys: [["Space"]], label: 'jump' },
      { keys: [["Ctrl"]], label: 'duck' },
    ] },
    { group: 'building', rows: [
      { keys: [["Q"]], label: 'spawnMenuHoldOr' },
      { keys: [["E"]], label: 'spawnWhatIsArmed' },
      { keys: [["Z"]], label: 'undoYourLastSpawn' },
      { keys: [["Shift"]], label: 'turnTheHeldProp' },
      { keys: [["R"]], label: 'reloadAGunWith' },
    ] },
    { group: 'tools', rows: [
      { keys: [["1"]], label: 'physicsGun' },
      { keys: [["2"]], label: 'gravityGun' },
      { keys: [["3"]], label: 'nextWeapon' },
      { keys: [["Wheel"]], label: 'previousOrNextWeapon' },
      { keys: [["F"]], label: 'useWhatYouLook' },
      { keys: [["Mouse2"]], label: 'aimDownAGun' },
      { keys: [["Mouse3"]], label: 'aGunSQuick' },
    ] },
    { group: 'running', rows: [
      { keys: [["C"]], label: 'saveACheckpoint' },
      { keys: [["V"]], label: 'goToTheCheckpoint' },
      { keys: [["X"]], label: 'nextCheckpoint' },
      { keys: [["G"]], label: 'clearCheckpoints' },
      { keys: [["N"]], label: 'nextMovementStyle' },
      { keys: [["T"]], label: 'nextTimedTrackOn' },
    ] },
    { group: 'general', rows: [
      { keys: [["F5"]], label: 'firstOrThirdPerson2' },
      { keys: [["M"]], label: 'changeMap' },
      { keys: [["Tab"]], label: 'scoreboardHold' },
      { keys: [["Y"]], label: 'chat' },
      { keys: [["U"]], label: 'chatWithNearbyPlayers' },
      { keys: [["K"]], label: 'pushToTalk' },
      { keys: [["H"]], label: 'helpAndControls' },
      { keys: [["B"]], label: 'loadout' },
      { keys: [["Esc"]], label: 'menuAndSettings' },
    ] },
    { group: 'voice', rows: [
      { keys: [["Esc"]], label: 'selfMuteMenu' },
      { keys: [["G"]], label: 'lookAtAPlayer' },
      { keys: [["K"]], label: 'lookAtAPlayer2' },
    ] },
  ],
  'hungario': [
    { group: 'playing', rows: [
      { keys: [["Space"]], label: 'splitThrowHalfOf' },
      { keys: [["Mouse1"]], label: 'splitMouse' },
      { keys: [["W"]], label: 'ejectALittleMass' },
      { keys: [["Q"]], label: 'throwWhatYouAre' },
      { keys: [["Mouse2"]], label: 'throwMouse' },
      { keys: [["Shift"]], label: 'boostHold' },
    ] },
    { group: 'communication', rows: [
      { keys: [["Y"]], label: 'chat' },
      { keys: [["U"]], label: 'chatWithNearbyPlayers' },
      { keys: [["V"]], label: 'pushToTalk' },
    ] },
    { group: 'interface', rows: [
      { keys: [["Tab"]], label: 'scoreboardHold' },
      { keys: [["H"]], label: 'helpAndControls' },
      { keys: [["M"]], label: 'changeMap' },
      { keys: [["Esc"]], label: 'menuAndSettings' },
    ] },
    { group: 'mouse', rows: [
      { keys: [["Point"]], label: 'steerTheFurtherThe' },
    ] },
    { group: 'voice', rows: [
      { keys: [["Esc"]], label: 'selfMuteMenu' },
      { keys: [["G"]], label: 'lookAtAPlayer' },
      { keys: [["K"]], label: 'lookAtAPlayer2' },
    ] },
  ],
  'buses-from-hell': [
    { group: 'movement', rows: [
      { keys: [["W"]], label: 'forwardDrivingAccelerate' },
      { keys: [["S"]], label: 'backDrivingBrakeAnd' },
      { keys: [["A"]], label: 'strafeLeftDrivingSteer' },
      { keys: [["D"]], label: 'strafeRightDrivingSteer' },
      { keys: [["Space"], ["Wheel"]], label: 'jumpWhileOutChange' },
      { keys: [["Ctrl"]], label: 'crouch' },
    ] },
    { group: 'communication', rows: [
      { keys: [["Y"]], label: 'chat' },
      { keys: [["U"]], label: 'chatToYourSide' },
      { keys: [["V"]], label: 'pushToTalk' },
    ] },
    { group: 'general', rows: [
      { keys: [["F5"]], label: 'firstOrThirdPerson' },
      { keys: [["Tab"]], label: 'scoreboardHold' },
      { keys: [["H"]], label: 'helpAndControls' },
      { keys: [["M"]], label: 'changeMap' },
      { keys: [["Esc"]], label: 'menuAndSettings' },
    ] },
    { group: 'mouse', rows: [
      { keys: [["Mouse1"]], label: 'swingTheHammerOr' },
      { keys: [["Mouse2"]], label: 'watchTheOneBefore' },
      { keys: [["Mouse3"]], label: 'theirEyesOrBehind' },
    ] },
    { group: 'voice', rows: [
      { keys: [["Esc"]], label: 'selfMuteMenu' },
      { keys: [["G"]], label: 'lookAtAPlayer' },
      { keys: [["K"]], label: 'lookAtAPlayer2' },
    ] },
  ],
  'smash-copter': [
    { group: 'movement', rows: [
      { keys: [["W"]], label: 'forwardChopperTiltForward' },
      { keys: [["S"]], label: 'backChopperTiltBack' },
      { keys: [["A"]], label: 'strafeLeftChopperTurn' },
      { keys: [["D"]], label: 'strafeRightChopperTurn' },
      { keys: [["Space"]], label: 'jumpChopperUp' },
      { keys: [["Ctrl"]], label: 'crouchChopperDown' },
      { keys: [["Shift"]], label: 'walkTheBrakeOn' },
    ] },
    { group: 'weapons', rows: [
      { keys: [["Wheel"]], label: 'previousOrNextWeapon' },
    ] },
    { group: 'hands', rows: [
      { keys: [["E"]], label: 'getIntoOrOut' },
      { keys: [["R"]], label: 'reloadInTheShowdown' },
      { keys: [["1-5"]], label: 'weaponSlotsInThe' },
    ] },
    { group: 'communication', rows: [
      { keys: [["Y"]], label: 'chat' },
      { keys: [["U"]], label: 'chatToYourSide' },
      { keys: [["V"]], label: 'pushToTalk' },
    ] },
    { group: 'general', rows: [
      { keys: [["F5"]], label: 'firstOrThirdPerson' },
      { keys: [["Tab"]], label: 'scoreboardHold' },
      { keys: [["H"]], label: 'helpAndControls' },
      { keys: [["M"]], label: 'changeMap' },
      { keys: [["Esc"]], label: 'menuAndSettings' },
    ] },
    { group: 'voice', rows: [
      { keys: [["Esc"]], label: 'selfMuteMenu' },
      { keys: [["G"]], label: 'lookAtAPlayer' },
      { keys: [["K"]], label: 'lookAtAPlayer2' },
    ] },
  ],
  'zombie-zone': [
    { group: 'movement', rows: [
      { keys: [["WASD"]], label: 'move' },
      { keys: [["Space"]], label: 'jump' },
      { keys: [["Ctrl"]], label: 'duck' },
    ] },
    { group: 'hands', rows: [
      { keys: [["E"]], label: 'usePickUpRevive' },
      { keys: [["G"]], label: 'medkitOnYourselfOr' },
      { keys: [["Q"]], label: 'takePills' },
      { keys: [["F"]], label: 'shove' },
      { keys: [["B"]], label: 'deployTheBoxYou' },
    ] },
    { group: 'weapons', rows: [
      { keys: [["Mouse2"]], label: 'aimDownTheSights' },
      { keys: [["R"]], label: 'reload' },
      { keys: [["1"]], label: 'slot1Melee' },
      { keys: [["2"]], label: 'slot2Sidearm' },
      { keys: [["3"]], label: 'slot3Primary' },
      { keys: [["4"]], label: 'slot4Heavy' },
      { keys: [["5"]], label: 'slot5Thrown' },
      { keys: [["Wheel"]], label: 'previousOrNextWeapon' },
    ] },
    { group: 'communication', rows: [
      { keys: [["Y"]], label: 'chat' },
      { keys: [["U"]], label: 'teamChat' },
      { keys: [["V"]], label: 'pushToTalk' },
    ] },
    { group: 'general', rows: [
      { keys: [["F5"]], label: 'firstOrThirdPerson' },
      { keys: [["Tab"]], label: 'scoreboardHold' },
      { keys: [["H"]], label: 'helpAndControls' },
      { keys: [["M"]], label: 'changeMap' },
      { keys: [["Esc"]], label: 'menuAndSettings' },
    ] },
    { group: 'mouse', rows: [
      { keys: [["Mouse1"]], label: 'fire' },
      { keys: [["Mouse2"]], label: 'shove' },
      { keys: [["Wheel"]], label: 'nextOrPreviousWeapon' },
    ] },
    { group: 'voice', rows: [
      { keys: [["Esc"]], label: 'selfMuteMenu' },
      { keys: [["G"]], label: 'lookAtAPlayer' },
      { keys: [["K"]], label: 'lookAtAPlayer2' },
    ] },
  ],
  'hide-n-seek': [
    { group: 'movement', rows: [
      { keys: [["WASD"]], label: 'move' },
      { keys: [["Space"], ["Wheel"]], label: 'jump' },
      { keys: [["Ctrl"]], label: 'crouch' },
      { keys: [["Shift"]], label: 'sprint' },
      { keys: [["Alt"]], label: 'walkQuietly' },
    ] },
    { group: 'general', rows: [
      { keys: [["E"]], label: 'openOrShutA' },
      { keys: [["F5"]], label: 'firstOrThirdPerson' },
      { keys: [["Tab"]], label: 'scoreboardHold' },
      { keys: [["H"]], label: 'helpAndControls' },
      { keys: [["M"]], label: 'changeMap' },
      { keys: [["Esc"]], label: 'menuAndSettings' },
    ] },
    { group: 'hiders', rows: [
      { keys: [["T"]], label: 'taunt' },
      { keys: [["F3"]], label: 'pickATaunt' },
    ] },
    { group: 'communication', rows: [
      { keys: [["Y"]], label: 'chat' },
      { keys: [["U"]], label: 'teamChat' },
      { keys: [["V"]], label: 'pushToTalk' },
    ] },
    { group: 'voice', rows: [
      { keys: [["Esc"]], label: 'selfMuteMenu' },
      { keys: [["G"]], label: 'lookAtAPlayer' },
      { keys: [["K"]], label: 'lookAtAPlayer2' },
    ] },
  ],
  'prop-hunt': [
    { group: 'movement', rows: [
      { keys: [["WASD"]], label: 'move' },
      { keys: [["Space"]], label: 'jump' },
      { keys: [["Ctrl"]], label: 'duck' },
    ] },
    { group: 'hunters', rows: [
      { keys: [["Wheel"]], label: 'previousOrNextWeapon' },
      { keys: [["R"]], label: 'reload' },
      { keys: [["Mouse2"]], label: 'aimDownTheSights' },
      { keys: [["F"]], label: 'quickMelee' },
      { keys: [["1-5"]], label: 'weaponSlots' },
      { keys: [["B"]], label: 'loadout' },
    ] },
    { group: 'props', rows: [
      { keys: [["E"]], label: 'becomeWhatYouLook' },
      { keys: [["Q"]], label: 'showYourselfHideAgain' },
      { keys: [["C"]], label: 'lockRotation' },
      { keys: [["T"]], label: 'taunt' },
      { keys: [["F3"]], label: 'pickATaunt' },
      { keys: [["Up"]], label: 'tiltForward' },
      { keys: [["Down"]], label: 'tiltBack' },
      { keys: [["Left"]], label: 'leanLeft' },
      { keys: [["Right"]], label: 'leanRight' },
      { keys: [["Z"]], label: 'standUpright' },
    ] },
    { group: 'communication', rows: [
      { keys: [["Y"]], label: 'chat' },
      { keys: [["U"]], label: 'teamChat' },
      { keys: [["V"]], label: 'pushToTalk' },
    ] },
    { group: 'general', rows: [
      { keys: [["F5"]], label: 'firstOrThirdPerson' },
      { keys: [["Tab"]], label: 'scoreboardHold' },
      { keys: [["H"]], label: 'helpAndControls' },
      { keys: [["M"]], label: 'changeMap' },
      { keys: [["Esc"]], label: 'menuAndSettings' },
    ] },
    { group: 'voice', rows: [
      { keys: [["Esc"]], label: 'selfMuteMenu' },
      { keys: [["G"]], label: 'lookAtAPlayer' },
      { keys: [["K"]], label: 'lookAtAPlayer2' },
    ] },
  ],
  'murder-mystery': [
    { group: 'movement', rows: [
      { keys: [["WASD"]], label: 'move' },
      { keys: [["Space"]], label: 'jump' },
      { keys: [["Ctrl"]], label: 'crouch' },
      { keys: [["Shift"]], label: 'sprint' },
      { keys: [["Alt"]], label: 'walkQuietly' },
    ] },
    { group: 'general', rows: [
      { keys: [["E"]], label: 'openOrShutA' },
      { keys: [["F5"]], label: 'firstOrThirdPerson' },
      { keys: [["Tab"]], label: 'scoreboardHold' },
      { keys: [["H"]], label: 'helpAndControls' },
      { keys: [["M"]], label: 'changeMap' },
      { keys: [["Esc"]], label: 'menuAndSettings' },
    ] },
    { group: 'weapons', rows: [
      { keys: [["Mouse1"]], label: 'stabOrShoot' },
      { keys: [["Q"]], label: 'drawOrPutAway' },
    ] },
    { group: 'communication', rows: [
      { keys: [["Y"]], label: 'chat' },
      { keys: [["V"]], label: 'pushToTalk' },
    ] },
    { group: 'voice', rows: [
      { keys: [["Esc"]], label: 'selfMuteMenu' },
      { keys: [["G"]], label: 'lookAtAPlayer' },
      { keys: [["K"]], label: 'lookAtAPlayer2' },
    ] },
  ],
  'deathrun': [
    { group: 'movement', rows: [
      { keys: [["WASD"]], label: 'move' },
      { keys: [["Space"]], label: 'jump' },
      { keys: [["Ctrl"]], label: 'crouch' },
      { keys: [["Shift"]], label: 'walkForANarrow' },
    ] },
    { group: 'hands', rows: [
      { keys: [["E"]], label: 'pressTheButtonIn' },
      { keys: [["R"]], label: 'reloadAtTheEnd' },
      { keys: [["1-5"]], label: 'weaponSlotsAtThe' },
      { keys: [["Wheel"]], label: 'previousOrNextWeapon' },
    ] },
    { group: 'communication', rows: [
      { keys: [["Y"]], label: 'chat' },
      { keys: [["U"]], label: 'teamChat' },
      { keys: [["V"]], label: 'pushToTalk' },
    ] },
    { group: 'general', rows: [
      { keys: [["F5"]], label: 'firstOrThirdPerson' },
      { keys: [["Tab"]], label: 'scoreboardHold' },
      { keys: [["H"]], label: 'helpAndControls' },
      { keys: [["M"]], label: 'changeMap' },
      { keys: [["Esc"]], label: 'menuAndSettings' },
    ] },
    { group: 'voice', rows: [
      { keys: [["Esc"]], label: 'selfMuteMenu' },
      { keys: [["G"]], label: 'lookAtAPlayer' },
      { keys: [["K"]], label: 'lookAtAPlayer2' },
    ] },
  ],
  'wipeout': [
    { group: 'movement', rows: [
      { keys: [["WASD"]], label: 'move' },
      { keys: [["Space"]], label: 'jump' },
      { keys: [["Ctrl"]], label: 'crouchUnderAHigh' },
      { keys: [["Shift"]], label: 'walkForBeamsAnd' },
    ] },
    { group: 'hands', rows: [
      { keys: [["E"]], label: 'pickUpOrPut' },
      { keys: [["R"]], label: 'reload' },
      { keys: [["1-5"]], label: 'weaponSlots' },
      { keys: [["Wheel"]], label: 'previousOrNextWeapon' },
    ] },
    { group: 'communication', rows: [
      { keys: [["Y"]], label: 'chat' },
      { keys: [["U"]], label: 'teamChat' },
      { keys: [["V"]], label: 'pushToTalk' },
    ] },
    { group: 'general', rows: [
      { keys: [["F5"]], label: 'firstOrThirdPerson' },
      { keys: [["Tab"]], label: 'scoreboardHold' },
      { keys: [["H"]], label: 'helpAndControls' },
      { keys: [["M"]], label: 'changeMap' },
      { keys: [["Esc"]], label: 'menuAndSettings' },
    ] },
    { group: 'voice', rows: [
      { keys: [["Esc"]], label: 'selfMuteMenu' },
      { keys: [["G"]], label: 'lookAtAPlayer' },
      { keys: [["K"]], label: 'lookAtAPlayer2' },
    ] },
  ],
  'dangerous-delivery': [
    { group: 'driving', rows: [
      { keys: [["W"]], label: 'accelerateWalkAhead' },
      { keys: [["S"]], label: 'brakeThenReverseOnce' },
      { keys: [["A"]], label: 'steerLeftStepLeft' },
      { keys: [["D"]], label: 'steerRightStepRight' },
      { keys: [["Space"]], label: 'handbrakeJumpOnFoot' },
    ] },
    { group: 'onFoot', rows: [
      { keys: [["E"]], label: 'useBuyFromA' },
      { keys: [["Shift"]], label: 'runOnFoot' },
    ] },
    { group: 'trip', rows: [
      { keys: [["R"]], label: 'backToTheLast' },
      { keys: [["T"]], label: 'restartTheTrip' },
      { keys: [["N"]], label: 'skipAStageCosts' },
      { keys: [["K"]], label: 'soloNobodySeesYou' },
      { keys: [["G"]], label: 'theLotSPanel' },
    ] },
    { group: 'general', rows: [
      { keys: [["F5"]], label: 'cameraChaseCabOr' },
      { keys: [["O"]], label: 'settingsHelpAndLeave' },
      { keys: [["Tab"]], label: 'scoreboardHold' },
      { keys: [["H"]], label: 'helpAndControls' },
      { keys: [["M"]], label: 'changeMap' },
    ] },
    { group: 'communication', rows: [
      { keys: [["V"]], label: 'pushToTalk' },
      { keys: [["Esc"]], label: 'menuAndSettings' },
    ] },
    { group: 'voice', rows: [
      { keys: [["Esc"]], label: 'selfMuteMenu' },
      { keys: [["G"]], label: 'lookAtAPlayer' },
      { keys: [["K"]], label: 'lookAtAPlayer2' },
    ] },
  ],
  'look-at-me': [
    { group: 'movement', rows: [
      { keys: [["WASD"]], label: 'move' },
      { keys: [["Space"], ["Wheel"]], label: 'jump' },
      { keys: [["Ctrl"]], label: 'crouchAWitchSees' },
    ] },
    { group: 'hands', rows: [
      { keys: [["E"]], label: 'takeOpenUse' },
      { keys: [["F"]], label: 'flashlightAndAWitch' },
    ] },
    { group: 'general', rows: [
      { keys: [["F5"]], label: 'firstOrThirdPerson' },
      { keys: [["/"]], label: 'aCommandRTo' },
      { keys: [["Tab"]], label: 'scoreboardHold' },
      { keys: [["H"]], label: 'helpAndControls' },
      { keys: [["M"]], label: 'changeMap' },
    ] },
    { group: 'voice', rows: [
      { keys: [["Esc"]], label: 'selfMuteMenu' },
      { keys: [["G"]], label: 'lookAtAPlayer' },
      { keys: [["K"]], label: 'lookAtAPlayer2' },
    ] },
    { group: 'communication', rows: [
      { keys: [["V"]], label: 'pushToTalk' },
      { keys: [["Esc"]], label: 'menuAndSettings' },
    ] },
  ],
}
