import type { Messages } from './en'

export const ja: Messages = {
  meta: {
    siteDescription:
      "Godot で作られ、The Modding Community のゲームプラットフォームで動くオープンソースのマルチプレイヤーゲーム。デスマッチ、サーフ、バニーホップ、サンドボックス、ミニゲームなど。",
    gameDescription: "{title}：{tagline} 無料のオープンソース。The Modding Community で遊べます。",
    mapsTitle: "{title} のマップ",
    mapsDescription: "{title} の全マップを、移植元のオリジナルマップと並べて Zee's Games での見た目で紹介します。",
    mapsDescriptionOwn: "{title} の全マップを、Zee's Games での見た目で紹介します。",
    goalsTitle: "目標",
    goalsDescription:
      "Zee's Games がある理由。The Modding Community のゲームプラットフォームに何ができるかを示す、本物で楽しいゲーム。コミュニティサーバーから、プレイヤーを切断せずにゲームを切り替えるマルチゲームサーバーまで。",
    notFoundTitle: "見つかりません",
    notFoundDescription: "このページは存在しません。",
    bannerAlt: "Zee's Games のバナー：ワイヤーフレームの風景に浮かぶネオンのタイトル",
  },
  nav: {
    main: "メイン",
    home: "Zee's Games ホーム",
    games: "ゲーム",
    goals: "目標",
    menu: "メニュー",
    github: "GitHub の Zee's Games",
    playOnTmc: "TMC で遊ぶ",
    language: "言語",
  },
  footer: {
    blurb:
      "Godot で作られ、{tmc} のゲームプラットフォームでホスト・プレイされるオープンソースのマルチプレイヤーゲーム。プラットフォームの実力を示すデモとして始まりましたが、あくまで楽しいゲームを目指しています。",
    tmc: "The Modding Community",
    explore: "探す",
    openSource: "オープンソース",
    orgOnGithub: "GitHub の zees-games",
    sourceCode: "ソースコード",
    madeWithGodot: "Godot 製",
    sourceOnGithub: "GitHub のソースコード",
    disclaimer:
      "Zee's Games は個人プロジェクトであり、The Modding Community の公式製品ではありません。オリジナルのマップは各作者に帰属します。各マップのクレジットをご覧ください。",
  },
  kind: {
    game: "ゲーム",
    minigame: "ミニゲーム",
  },
  card: {
    zeesServer: "Zee のサーバー",
    coverAlt: "{title} のゲーム画面",
    maps: { other: "{n} 個のマップ" },
  },
  play: {
    playNow: "今すぐプレイ",
    zeesServer: "Zee のサーバーで遊ぶ",
    onTmc: "TMC の {title}",
    source: "ソース",
  },
  home: {
    eyebrow: "オープンソース · Godot 製",
    intro:
      "{tmc} のゲームプラットフォーム上で私が作り、運営しているマルチプレイヤーゲームです。どれもプラットフォームの実力を示すとともに、楽しく遊べるように作っています。デスマッチ、サーフ、バニーホップ、物理サンドボックス、そしてたくさんのミニゲーム。",
    tmc: "The Modding Community",
    pickGame: "ゲームを選ぶ",
    myGoals: "私の目標",
    statGames: "ゲーム",
    statServers: "私のサーバー",
    statPrice: "価格",
    free: "無料",
    runningTitle: "稼働中",
    runningBody: "TMC で私自身のサーバーが動いているゲーム。すぐに参加できます。",
    allOnTmc: "TMC のすべてのゲーム",
    worksTitle: "開発中",
    worksBody: "ゲームやミニゲームを順次追加予定です。多くはすでに遊べます。サーバーはこれからです。",
    poweredTitle: "The Modding Community 提供",
    poweredBody:
      "ここにあるすべてのゲームを、TMC がホスト、掲載、運営しています。これらのゲームは TMC のデモであり、プラットフォームと Godot 向けのオープンな Dot アドオンがどんなゲームにも役立つことの証明です。もちろん、単純に楽しいゲームでもあります。",
    readGoals: "私の目標を読む",
    features: [
      { title: "コミュニティサーバー", body: "誰でもサーバーを立て、設定を調整して公開できます。" },
      { title: "どこでも遊べる", body: "ブラウザー、デスクトップアプリ、スマートフォンから、同じサーバーで遊べます。" },
      { title: "複数のゲームを 1 つのサーバーで", body: "プレイヤーを切断せずにゲームを切り替えられます。" },
      { title: "オープンソース", body: "すべてのゲーム、マップパック、アドオンが GitHub にあります。" },
    ],
  },
  game: {
    allGames: "← すべてのゲーム",
    whatItIs: "どんなゲーム？",
    howToPlay: "遊び方",
    maps: "マップ",
    allMaps: "全 {n} マップ",
    mapAlt: "{title} の {map}",
    modes: "モード",
    inspiredBy: "インスピレーション元",
    links: "リンク",
    onTmcLong: "The Modding Community の {title}",
    serverBrowser: "サーバーブラウザー",
    mapPack: "GitHub のマップパック",
    moreGames: "ほかのゲーム",
  },
  maps: {
    heading: "{title} {maps}",
    headingWord: "マップ",
    count: { other: "{n} 個のマップ。" },
    allPorted:
      "すべて古いゲームから移植したものです。各マップに、Zee's Games での見た目をオリジナルのスクリーンショットと並べて表示しています。",
    somePorted:
      "そのうち {n} 個は古いゲームから移植したもので、各マップに Zee's Games での見た目をオリジナルのスクリーンショットと並べて表示しています。残りはこのゲームのために作りました。",
    nonePorted: "すべて {title} のために作りました。",
    mapPack: "GitHub のマップパック",
    search: "マップを検索",
    filter: "種類で絞り込む",
    all: "すべて",
    shown: { other: "{n} 個のマップ" },
    none: "一致するマップはありません。",
    noScreenshot: "スクリーンショットはまだありません",
    noOriginal: "オリジナルの画像が見つかりません",
    labelOurs: "Zee's Games",
    labelOriginal: "オリジナル",
    originalAlt: "{game} の {map}",
    theOriginalGame: "元のゲーム",
    portedFrom: "{map} から移植",
    portedFromGame: "{map}（{game}）から移植",
    madeFor: "{title} 用に制作",
    by: "作者：{author}",
    originalShot: "オリジナルのスクリーンショット：",
    source: "出典",
    closestMatch: "（最も近い候補：{map}）",
    families: {
      surf: "サーフ",
      bhop: "バニーホップ",
      kz: "KZ",
      ze: "ゾンビエスケープ",
      zs: "ゾンビサバイバル",
    },
  },
  goals: {
    eyebrow: "私の目標",
    title: "プラットフォームのデモ。",
    titleAccent: "遊ぶ価値のあるゲーム。",
    intro:
      "ここにあるゲームはどれも、The Modding Community のゲームプラットフォームと Dot コレクションに何ができるか、そしてあなた自身のゲームプロジェクトがその上で何ができるかを示すデモとして始まりました。デモでも楽しくあるべきなので、どれも本物のゲームとして作っています。",
    demo: {
      title: "プラットフォームの実力を示す",
      body: [
        "これらのゲームは、TMC ゲームプラットフォームの動くショーケースです。移動、戦闘、乗り物、NPC、物理、リーダーボード、パーティー、マッチメイキング、専用サーバーまで、どれも他のプロジェクトでも使える同じオープンな Dot アドオンで作られています。これらのゲームにできることは、あなたのゲームにもできます。",
        "デモだからといって退屈なゲームでいいわけではありません。どのゲームにも専用のマップ、モード、作り込みがあり、それ自体を遊ぶ価値があります。",
      ],
      tiles: ["移動", "戦闘", "乗り物", "NPC の AI", "物理", "リーダーボード", "パーティー", "マッチメイキング", "サーバー"],
    },
    community: {
      title: "コミュニティサーバーを重視",
      body:
        "これらのゲームも、プラットフォーム全体も、{strong}によって成り立っています。大きな目標の一つは、{deploy} リポジトリを使って、誰でもこれらのゲームを 1 つ以上動かすサーバーを立てられるようにすることです。",
      strong: "コミュニティサーバー",
      deploy: "Dot Server Deploy",
      online: "オンライン",
    },
    rules: {
      title: "あなたのサーバー、あなたのルール",
      body:
        "サーバーの管理者は、ゲームと使用する各アドオンの設定を変更して、独自のゲームプレイにできます。そのうえで、サーバーとゲームをプラットフォームに掲載します。",
      sliders: ["ラウンド時間", "重力", "最大プレイヤー数", "武器の拡散"],
    },
    anywhere: {
      title: "どこからでも参加",
      body:
        "プレイヤーは、掲載されたサーバーにウェブブラウザー、デスクトップアプリ、スマートフォンから直接参加できます。プラットフォームはクロスプラットフォームなので、全員が同じサーバーで遊べます。",
      browse: "TMC でゲームを探す",
      browser: "ブラウザー",
      desktop: "デスクトップ",
      mobile: "モバイル",
    },
    multi: {
      title: "1 つのサーバーで、たくさんのゲーム",
      body: [
        "1 つのサーバーで{strong}を同時に動かし、プレイヤーを接続したまま切り替えられます。Garry's Mod や Counter-Strike のコミュニティサーバーで遊んだことがあれば、サーバーがマップを変え、全員がそれをダウンロードして読み込むのを見たことがあるでしょう。ここではゲームも同じ仕組みです。",
        "ゲームにはそれぞれ専用のマップがありますが、マップの読み込みとゲームの読み込みは、内部ではほぼ同じ仕組みで行われます。",
      ],
      strong: "複数のゲーム",
      nextRound: "次のラウンド",
      buildNight: "ビルドナイト",
      connected: "12 人がずっと接続したまま",
    },
    cdn: {
      title: "コンテンツは自動で届く",
      body:
        "ゲームやマップが変わると、プレイヤーは必要なものをプラットフォームのグローバル CDN から自動的にダウンロードします。CDN は The Modding Community の{assets}からファイルを同期します。ファイルは Godot または対象のゲームの下に整理され、セキュリティ、デプロイ、競合の管理のために GitHub とよく似たバージョンとタグが付いています。",
      assets: "アセット",
      player: "プレイヤー",
    },
    open: {
      title: "無料でオープンソース",
      body:
        "すべてのゲーム、マップパック、アドオンは GitHub でオープンソースとして公開されています。仕組みを読んだり、自分のサーバーを動かしたり、一部を自分のゲームに借りたりできます。",
      org: "GitHub の zees-games",
      aiTitle: "はい、AI を使っています",
      aiBody: [
        "これらのゲームの多くはまだ完成しておらず、近いうちにさらに手を入れる予定です。古いゲームからのマップ変換も含め、Claude Code で作成しました（クレジットは各リポジトリの README と、ここの各マップページに記載しています）。",
        "ゲームは無料でオープンソースの小さなミニゲームが中心ですが、それが動くプラットフォームも私が作っていて、それだけですでに{em}時間がかかっています。AI はそれを速めてくれます。使わずに済めばいいのですが。",
      ],
      aLot: "とても多くの",
    },
  },
  notFound: {
    title: "別の場所でリスポーン",
    body: "このページは存在しないか、移動しました。",
    back: "ゲームに戻る",
  },
}
