import type { Messages } from './en'

export const zh: Messages = {
  meta: {
    siteDescription:
      "使用 Godot 制作、运行在 The Modding Community 游戏平台上的开源多人游戏：死亡竞赛、Surf 与 Bhop、沙盒、小游戏等。",
    gameDescription: "{title}：{tagline} 免费开源，在 The Modding Community 上畅玩。",
    mapsTitle: "{title} 地图",
    mapsDescription: "{title} 的所有地图，在 Zee's Games 中与移植来源的原版地图并排展示。",
    mapsDescriptionOwn: "{title} 的所有地图，展示它们在 Zee's Games 中的样子。",
    goalsTitle: "目标",
    goalsDescription:
      "Zee's Games 存在的原因：用真正好玩的游戏展示 The Modding Community 游戏平台的能力，从社区服务器到无需断开玩家即可切换游戏的多游戏服务器。",
    notFoundTitle: "未找到",
    notFoundDescription: "此页面不存在。",
    bannerAlt: "Zee's Games 横幅：线框风景上方的霓虹标题",
  },
  nav: {
    main: "主导航",
    home: "Zee's Games 首页",
    games: "游戏",
    goals: "目标",
    menu: "菜单",
    github: "GitHub 上的 Zee's Games",
    playOnTmc: "在 TMC 上游玩",
    language: "语言",
  },
  footer: {
    blurb:
      "使用 Godot 制作的开源多人游戏，托管并运行在 {tmc} 的游戏平台上。它们最初是平台能力的演示，同时也是为了好玩而做的。",
    tmc: "The Modding Community",
    explore: "探索",
    openSource: "开源",
    orgOnGithub: "GitHub 上的 zees-games",
    sourceCode: "源代码",
    madeWithGodot: "使用 Godot 制作",
    sourceOnGithub: "GitHub 上的源代码",
    disclaimer:
      "Zee's Games 是个人项目，并非 The Modding Community 的官方产品。原版地图归其作者所有，请参阅各地图的署名信息。",
  },
  kind: {
    game: "游戏",
    minigame: "小游戏",
  },
  card: {
    zeesServer: "Zee 的服务器",
    coverAlt: "{title} 游戏画面",
    maps: { other: "{n} 张地图" },
  },
  play: {
    playNow: "立即游玩",
    zeesServer: "在 Zee 的服务器上游玩",
    onTmc: "TMC 上的 {title}",
    source: "源码",
  },
  home: {
    eyebrow: "开源 · 使用 Godot 制作",
    intro:
      "这些是我在 {tmc} 的游戏平台上开发并运营的多人游戏。每一款都展示了平台的能力，也都是为了好玩而做：死亡竞赛、Surf 与 Bhop、物理沙盒，以及一大堆小游戏。",
    tmc: "The Modding Community",
    pickGame: "选择一款游戏",
    myGoals: "我的目标",
    statGames: "游戏",
    statServers: "我的服务器",
    statPrice: "价格",
    free: "免费",
    runningTitle: "正在运行",
    runningBody: "在 TMC 上有我自己服务器的游戏，可以直接加入。",
    allOnTmc: "TMC 上的所有游戏",
    worksTitle: "开发中",
    worksBody: "更多游戏和小游戏即将推出。大多数已经可以游玩，服务器随后上线。",
    poweredTitle: "由 The Modding Community 提供支持",
    poweredBody:
      "TMC 托管、收录并运行这里的每一款游戏。这些游戏是它的演示：证明了该平台以及面向 Godot 的开源 Dot 插件能为任何游戏做到什么。当然，它们本身也很好玩。",
    readGoals: "阅读我的目标",
    features: [
      { title: "社区服务器", body: "任何人都可以架设服务器、调整设置并将其上架。" },
      { title: "随处可玩", body: "浏览器、桌面应用或手机，都在同一批服务器上。" },
      { title: "多款游戏，一台服务器", body: "切换游戏时不会断开玩家。" },
      { title: "开源", body: "每一款游戏、地图包和插件都在 GitHub 上。" },
    ],
  },
  game: {
    allGames: "← 所有游戏",
    whatItIs: "游戏简介",
    howToPlay: "玩法",
    maps: "地图",
    allMaps: "全部 {n} 张地图",
    mapAlt: "{title} 中的 {map}",
    modes: "模式",
    inspiredBy: "灵感来源",
    links: "链接",
    onTmcLong: "The Modding Community 上的 {title}",
    serverBrowser: "服务器浏览器",
    mapPack: "GitHub 上的地图包",
    moreGames: "更多游戏",
  },
  maps: {
    heading: "{title} {maps}",
    headingWord: "地图",
    count: { other: "{n} 张地图。" },
    allPorted:
      "它们全部移植自较早的游戏；每张地图都会并排展示它在 Zee's Games 中的样子和原版截图。",
    somePorted:
      "其中 {n} 张移植自较早的游戏，每张都会并排展示它在 Zee's Games 中的样子和原版截图。其余的是专为这款游戏制作的。",
    nonePorted: "它们全部是专为 {title} 制作的。",
    mapPack: "GitHub 上的地图包",
    search: "搜索地图",
    filter: "按类型筛选",
    all: "全部",
    shown: { other: "{n} 张地图" },
    none: "没有匹配的地图。",
    noScreenshot: "暂无截图",
    noOriginal: "未找到原版图片",
    labelOurs: "Zee's Games",
    labelOriginal: "原版",
    originalAlt: "{game} 中的 {map}",
    theOriginalGame: "原版游戏",
    portedFrom: "移植自 {map}",
    portedFromGame: "移植自 {map}（{game}）",
    madeFor: "为 {title} 制作",
    by: "作者：{author}",
    originalShot: "原版截图：",
    source: "来源",
    closestMatch: "（找到的最接近匹配：{map}）",
    families: {
      surf: "Surf",
      bhop: "Bunny Hop",
      kz: "KZ",
      ze: "僵尸逃跑",
      zs: "僵尸生存",
    },
  },
  goals: {
    eyebrow: "我的目标",
    title: "平台的演示。",
    titleAccent: "值得一玩的游戏。",
    intro:
      "这里的每一款游戏最初都是为了演示 The Modding Community 游戏平台及其 Dot 集合能做什么，以及你自己的游戏项目在上面能做什么。演示也应该好玩，所以每一款都按真正的游戏来做。",
    demo: {
      title: "展示平台的能力",
      body: [
        "这些游戏是 TMC 游戏平台的实际展示：移动、战斗、载具、NPC、物理、排行榜、组队、匹配和专用服务器，全部基于任何项目都能使用的同一批开源 Dot 插件构建。这些游戏能做到的，你的游戏也能做到。",
        "做演示并不是做出无聊游戏的借口。每款游戏都有自己的地图、模式和打磨，本身就值得一玩。",
      ],
      tiles: ["移动", "战斗", "载具", "NPC AI", "物理", "排行榜", "组队", "匹配", "服务器"],
    },
    community: {
      title: "专注于社区服务器",
      body:
        "这些游戏乃至整个平台都依靠{strong}而繁荣。一个主要目标是让任何人都能通过 {deploy} 仓库架设运行其中一款或多款游戏的服务器。",
      strong: "社区服务器",
      deploy: "Dot Server Deploy",
      online: "在线",
    },
    rules: {
      title: "你的服务器，你的规则",
      body:
        "服务器所有者可以修改游戏及其使用的每个插件的配置，让玩法独一无二。然后在平台上架服务器和游戏。",
      sliders: ["回合时间", "重力", "最大玩家数", "武器散布"],
    },
    anywhere: {
      title: "随时随地加入",
      body:
        "玩家可以直接从网页浏览器、桌面应用或手机加入已上架的服务器。平台支持跨平台，因此所有人都在同一批服务器上游玩。",
      browse: "在 TMC 上浏览游戏",
      browser: "浏览器",
      desktop: "桌面端",
      mobile: "移动端",
    },
    multi: {
      title: "一台服务器，多款游戏",
      body: [
        "一台服务器可以同时运行{strong}，并在玩家保持连接的情况下在它们之间切换。如果你在 Garry's Mod 或 Counter-Strike 里玩过社区服务器，就见过服务器换图、每位玩家下载并加载地图的过程。这里的游戏也是同样的原理。",
        "游戏仍然有各自的地图，但加载地图和加载游戏在底层几乎走的是同一套机制。",
      ],
      strong: "多款游戏",
      nextRound: "下一回合",
      buildNight: "建造之夜",
      connected: "12 名玩家全程保持连接",
    },
    cdn: {
      title: "内容自动送达",
      body:
        "当游戏或地图切换时，玩家会自动从平台的全球 CDN 下载所需内容。CDN 从 The Modding Community 上的{assets}同步文件，这些文件归档在 Godot 或内容所属的游戏之下，并带有与 GitHub 非常相似的版本和标签，用于安全、部署和冲突处理。",
      assets: "资源",
      player: "玩家",
    },
    open: {
      title: "免费且开源",
      body:
        "每一款游戏、地图包和插件都在 GitHub 上开源。你可以阅读其工作原理、运行自己的服务器，或借用其中一部分用在自己的游戏里。",
      org: "GitHub 上的 zees-games",
      aiTitle: "是的，我在使用 AI",
      aiBody: [
        "这些游戏大多尚未完成，很快会投入更多精力。它们是用 Claude Code 制作的，包括从较早游戏转换地图（署名见各仓库的 README 以及这里的各地图页面）。",
        "它们免费、开源，而且大多是小型小游戏，我还要开发它们所运行的平台，这已经占去了{em}时间。AI 能加快这些工作。我也希望自己不需要它。",
      ],
      aLot: "大量",
    },
  },
  notFound: {
    title: "在别处重生",
    body: "此页面不存在，或已被移动。",
    back: "返回游戏",
  },
}
