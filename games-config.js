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
    category: "肉鸽",
    icon: "./PassingExpert/favicon.8de18.ico",
    url: "./PassingExpert/index.html",
    rating: "4.9",
    featured: true,
    description: "点击即可进入本地 PassingExpert 游戏。"
  },
  {
    name: "卤蛋英雄",
    category: "割草",
    icon: "./TheEggHero/favicon.8de18.ico",
    url: "./TheEggHero/index.html",
    rating: "4.7",
    description: "高速反应和路线选择的竞速体验。"
  },
  {
    name: "泡泡龙",
    category: "休闲",
    icon: "./PuzzleBobble/favicon.8de18.ico",
    url: "./PuzzleBobble/index.html",
    rating: "4.8",
    description: "高速反应和路线选择的竞速体验。"
  }
];
