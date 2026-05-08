/*
  游戏配置文件。

  你主要改每个游戏的 icon 和 url：
  - icon: 游戏图标地址，可以是本地路径，例如 "./game1/favicon.8de18.ico"
  - url: 游戏打开地址，可以是本地页面、线上链接或相对路径

  可选字段：
  - name: 游戏名称
  - category: 分类，会自动生成筛选按钮
  - rating: 显示评分
  - featured: true 表示首页推荐位
  - description: 推荐位说明文案
*/
window.GAME_CONFIG = [
  {
    name: "闯关专家",
    category: "割草",
    icon: "./PassExpert/favicon.8de18.ico",
    url: "./PassExpert/index.html",
    rating: "4.9",
    description: "割草击打节奏感强，适合喜欢挑战的玩家。"
  },
  {
    name: "卤蛋英雄",
    category: "割草",
    icon: "./TheEggHero/favicon.8de18.ico",
    url: "./TheEggHero/index.html",
    rating: "4.7",
    description: "割草击打节奏感强，适合喜欢挑战的玩家。"
  },
  {
    name: "幽灵射手",
    category: "冒险",
    icon: "./PhantomMarksman/favicon.ico",
    url: "./PhantomMarksman/index.html",
    rating: "4.8",
    description: "冒险闯关选择技能，适合喜欢策略的玩家。"
  },
  {
    name: "卡牌接龙",
    category: "益智",
    icon: "./Solitaire/favicon.ico",
    url: "./Solitaire/index.html",
    rating: "4.8",
    description: "卡牌接龙经典玩法，适合喜欢动脑的玩家。"
  },
  {
    name: "海王挑战",
    category: "冒险",
    icon: "./Aquaman/favicon.8de18.ico",
    url: "./Aquaman/index.html",
    rating: "4.8",
    description: "建造海上基地去冒险收集，适合喜欢创造经营的玩家。"
  },
  {
    name: "矿井合成",
    category: "休闲",
    icon: "./MergeMine/favicon.8de18.ico",
    url: "./MergeMine/index.html",
    rating: "4.9",
    featured: true,
    description: "合成矿石完成任务，适合喜欢合成和经营的玩家。"
  },
  {
    name: "箭头消除",
    category: "休闲",
    icon: "./Arrows/favicon.ico",
    url: "./Arrows/index.html",
    rating: "4.9",
    description: "点击箭头进行消除，适合喜欢动脑的玩家。"
  },
  {
    name: "打螺丝",
    category: "休闲",
    icon: "./Screw/favicon.8de18.ico",
    url: "./Screw/index.html",
    rating: "4.8",
    description: "点击螺丝进行旋转收纳，适合喜欢动手的玩家。"
  },
  {
    name: "麻将挪对对",
    category: "休闲",
    icon: "./MahjongCrash/favicon.ico",
    url: "./MahjongCrash/index.html",
    rating: "4.8",
    description: "经典麻将配对消除，适合喜欢传统游戏的玩家。"
  },
  {
    name: "修了个仙",
    category: "割草",
    icon: "./Immortal/favicon.ico",
    url: "./Immortal/index.html",
    rating: "4.8",
    description: "割草类修仙风格，适合喜欢东方题材的玩家。"
  },
  {
    name: "泡泡龙",
    category: "休闲",
    icon: "./PuzzleBobble/favicon.8de18.ico",
    url: "./PuzzleBobble/index.html",
    rating: "4.8",
    description: "无限制休闲泡泡龙，适合放松心情。"
  }
];
