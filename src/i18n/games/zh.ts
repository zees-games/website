import type { GameText } from './en'
import type { GameSlug } from '../../data/games'

export const zh: Record<GameSlug, GameText> = {
  'arena': {
    tagline: "节奏飞快的第一人称死亡竞赛，包含 GunGame 和经典的 Surf Deathmatch 地图。",
    summary: [
      "一款节奏飞快的第一人称死亡竞赛射击游戏。选择装备，在购买区购买武器，然后投入团队死亡竞赛、自由混战或 GunGame 对局。",
      "Arena 还能玩来自早期 Counter-Strike 游戏的经典 Surf Deathmatch 地图：你要一边高速滑过斜坡，一边战斗。",
    ],
    howToPlay: [
      "选择装备，或在购买区购买武器。",
      "在计时结束前击杀对手，冲上榜首。",
      "在 GunGame 中，每次击杀都会让你的武器换成阶梯中的下一把。",
    ],
    modes: [
      "团队死亡竞赛",
      "自由混战",
      "GunGame",
      "Surf Deathmatch",
    ],
    inspiredBy: "Counter-Strike: Source 的死亡竞赛与 Surf 战斗服务器",
  },
  'g2gfast': {
    tagline: "采用 Source 风格移动和排行榜的 Bunny Hop 与 Surf 计时跑图。",
    summary: [
      "一款 Bunny Hop 与 Surf 计时游戏，拥有 Source 风格的移动、起点和终点区域以及排行榜。在经典地图中与时间赛跑，冲击世界纪录。",
      "如果你玩过 Counter-Strike 里的 Surf Timer 或 Bunny Hop 服务器，就已经知道该怎么玩了。",
    ],
    howToPlay: [
      "离开起点区域即开始计时。",
      "通过侧移和跳跃保持速度，在斜坡上滑行而不掉落。",
      "到达终点区域，然后刷新自己的成绩。",
    ],
    modes: [
      "Surf",
      "Bunny Hop",
      "KZ",
    ],
    inspiredBy: "Counter-Strike: Source 的 Surf Timer 与 Bunny Hop 服务器",
  },
  'playground': {
    tagline: "物理沙盒：生成道具、NPC 和武器，想建什么就建什么。",
    summary: [
      "一款物理沙盒游戏。按住 Q 打开生成菜单，放入道具、NPC 和武器，再用物理枪和重力枪把它们拿起来，想建什么就建什么。",
      "这里没有任何规则。Garry's Mod 对它影响很大，如果你还没看出来的话。",
    ],
    howToPlay: [
      "按住 Q 打开生成菜单。",
      "用物理枪和重力枪抓取、投掷和冻结道具。",
      "建造、战斗或随便玩玩，服务器由你做主。",
    ],
    modes: [
      "沙盒",
    ],
    inspiredBy: "Garry's Mod",
  },
  'hungario': {
    tagline: "操控一只饥饿的怪物，吃东西成长，比所有人活得更久。",
    summary: [
      "一款 2D 多人游戏，你从一只弱小而饥饿的怪物开始。吃食物和比你小的玩家来成长，并躲开所有比你大的对手。",
      "分裂后向猎物扑去，喷出质量来诱敌，努力在榜单上拔得头筹。灵感来自经典浏览器游戏 Agar.io。",
    ],
    howToPlay: [
      "用鼠标移动：靠近怪物时较慢，离得越远越快。",
      "按空格键分裂并扑击，按 W 喷出质量。",
      "吃掉比你小的玩家，躲开比你大的。",
    ],
    modes: [
      "自由混战",
      "分裂",
    ],
    inspiredBy: "Agar.io",
  },
  'buses-from-hell': {
    tagline: "在一名或多名疯狂巴士司机的追杀中活下来。",
    summary: [
      "一到两名玩家驾驶巴士，其余所有人步行，必须在被碾压的威胁下撑到回合结束。",
      "灵感来自 Counter-Strike: Source 的小游戏地图 buses_from_hell。",
    ],
    howToPlay: [
      "逃跑者：不停移动，利用掩体，千万别站在马路上。",
      "司机：在时间结束前尽可能多地碾压逃跑者。",
    ],
    modes: [
      "司机对逃跑者",
    ],
    inspiredBy: "buses_from_hell，一张 Counter-Strike: Source 小游戏地图",
  },
  'smash-copter': {
    tagline: "大炮向你倾泻道具，你要稳稳站在摇摇晃晃的平台上。",
    summary: [
      "玩家出生在各由一根柱子支撑的平台上，中间的大炮不断把道具射向空中。上去的总会落下，还可能把你撞下平台。",
      "根据服务器设置，可以单人或组队求生。灵感来自 Counter-Strike: Source 的小游戏地图 mg_3k_smash_lego_copter。",
    ],
    howToPlay: [
      "留意天空，躲开大炮发射的一切。",
      "别从你的平台上掉下去。",
      "成为最后站着的玩家或队伍。",
    ],
    modes: [
      "单人生存",
      "团队生存",
    ],
    inspiredBy: "mg_3k_smash_lego_copter，一张 Counter-Strike: Source 小游戏地图",
  },
  'zombie-zone': {
    tagline: "合作僵尸生存：穿越城市逃生，或坚守十波进攻。",
    summary: [
      "一款合作僵尸游戏。在夜晚的城市里从一个避难所杀到下一个，或者在学校、商场、棒球场中抵御十波由导演系统操控、带有特殊感染者的尸潮。",
      "僵尸会掉落带有随机效果的箱子，有的很好，有的非常糟糕。",
    ],
    howToPlay: [
      "紧靠队友，互相掩护。",
      "在 Exodus 中抵达下一个安全屋；在 Survival 中坚持十波。",
      "要是有胆量，就赌一把掉落的箱子。",
    ],
    modes: [
      "合作 Survival",
      "Exodus",
    ],
    inspiredBy: "Left 4 Dead 和 Counter-Strike: Source 僵尸服务器",
  },
  'hide-n-seek': {
    tagline: "以自己的模样藏起来；每个被抓到的躲藏者都会加入搜捕。",
    summary: [
      "大多数玩家以自己的角色形象躲藏，而一两名搜捕者在黑屏中倒数，然后出发搜寻。",
      "搜捕者碰到躲藏者就能将其抓住，被抓的躲藏者也会变成搜捕者，因此搜捕的队伍会随回合推进不断壮大。",
    ],
    howToPlay: [
      "躲藏者：在倒数结束前找好位置，别被发现。",
      "搜捕者：碰到躲藏者即可抓住他们。",
      "最后剩下的躲藏者赢得本回合。",
    ],
    modes: [
      "捉迷藏",
    ],
  },
  'prop-hunt': {
    tagline: "伪装成家具一动不动，躲避蒙眼猎人的搜寻。",
    summary: [
      "大多数玩家是道具，通过变成家具、植物或岩石并保持不动来躲藏。其余玩家是猎人，开局时被蒙住双眼，之后有几分钟时间把它们找出来。",
      "每次猜错，猎人都会损失生命值，所以把房间里的每把椅子都打一遍可不算计划。",
    ],
    howToPlay: [
      "道具：变成与房间融为一体的东西，然后别动。",
      "猎人：向看起来不对劲的东西开枪；猜错会受伤。",
    ],
    modes: [
      "道具对猎人",
    ],
    inspiredBy: "Garry's Mod 的 Prop Hunt",
  },
  'murder-mystery': {
    tagline: "所有人看起来都一样，其中一人带着刀。",
    summary: [
      "一款 3D 社交推理游戏，所有人的外表完全相同。一到两名玩家是持刀的凶手，一到两名旁观者带着只能开一枪的枪，没有人知道其他人的身份。",
      "在他们找上你之前，弄清谁是谁。灵感来自 Garry's Mod 中老牌的 Murder 游戏模式。",
    ],
    howToPlay: [
      "凶手：在不被发现的情况下逐个解决目标。",
      "持枪旁观者：只有一发子弹，务必打准。",
      "其他所有人：收集线索，活下去。",
    ],
    modes: [
      "社交推理",
    ],
    inspiredBy: "Murder，一种 Garry's Mod 游戏模式",
  },
  'deathrun': {
    tagline: "闯过布满陷阱的赛道，而激活者会按下他们手里的每一个按钮。",
    summary: [
      "大多数玩家是跑者，在布满陷阱的长赛道上竞速；一名或多名激活者守在赛道旁，每个陷阱都有一个按钮，他们要设法干掉跑者。",
      "抵达终点的人会得到一把武器，并与激活者战斗。灵感来自 Counter-Strike 的 DeathRun 模组。",
    ],
    howToPlay: [
      "跑者：盯住激活者，把握时机通过每个陷阱。",
      "激活者：在最糟糕的时机按下陷阱按钮。",
      "抵达终点，武装自己，扭转局势。",
    ],
    modes: [
      "跑者对激活者",
    ],
    inspiredBy: "DeathRun，一个 Counter-Strike 模组",
  },
  'wipeout': {
    tagline: "水上障碍赛道：横扫的转臂、巨大的球，以及终点前的混战。",
    summary: [
      "在水面上搭建的障碍赛道中竞速：横扫的转臂、巨大的球、滚动的圆木、铁锤和会塌落的地板。掉进水里会回到上一个检查点。",
      "如果有多名玩家抵达终点，他们会在随机的竞技场里一决胜负，直到只剩一人。灵感来自经典电视节目。",
    ],
    howToPlay: [
      "把握好跳跃时机，通过每个障碍。",
      "掉下去就从上一个检查点重新开始。",
      "冲过终点，然后赢下竞技场决赛。",
    ],
    modes: [
      "障碍赛",
      "竞技场决赛",
    ],
    inspiredBy: "Wipeout，那档电视节目",
  },
  'dangerous-delivery': {
    tagline: "在没有护栏的山路上运货。越危险的任务报酬越高。",
    summary: [
      "驾驶满载的卡车驶过没有护栏的山路，穿越雪、雨、大风和落石，把货物送到货场。",
      "运送越危险，报酬越高，赚到的钱可以买更大的卡车和升级。",
    ],
    howToPlay: [
      "接取一份工作；越难的运输报酬越高。",
      "把卡车和货物完好无损地送到货场。",
      "把收入花在更大的卡车和升级上。",
    ],
    modes: [
      "运货任务",
    ],
  },
  'look-at-me': {
    tagline: "一座深达 32 层的黑暗房子，还有在房间里游荡的女巫。",
    summary: [
      "一款半恐怖游戏。穿过一座深达 32 层的黑暗房子，女巫们在房间里游荡。她们是巡逻每一层的 NPC，而且每一层都比上一层更难。",
      "在她们中任何一个盯着你太久之前，找到能打开下一扇门的东西。支持自定义地图。",
    ],
    howToPlay: [
      "找到能打开下一扇门的目标。",
      "避开女巫的视线，别让任何一个盯着你太久。",
      "通关全部 32 层。",
    ],
    modes: [
      "关卡推进",
    ],
  },
}
