const path = require('path')
module.exports = {
  base: '/',
  dest: 'public',
  title: '奔跑的蜗牛',
  description: '每天都要开心啊',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  // configureWebpack: () => {
  //   const NODE_ENV = process.env.NODE_ENV
  //   //判断是否是生产环境
  //   if(NODE_ENV === 'production'){
  //     return {
  //       output: {
  //         publicPath: 'https://cdn.jsdelivr.net/gh/CnGitAI/CnGitAI.github.io@gh-pages/'
  //       },
  //       resolve: {
  //         //配置路径别名
  //         alias: {
  //           'public': path.resolve(__dirname, './public') 
  //         }
  //       }
  //     }
  //   }else{
  //     return {
  //       resolve: {
  //         //配置路径别名
  //         alias: {
  //           'public': path.resolve(__dirname, './public') 
  //         }
  //       }
  //     }
  //   }
  // },
  theme: 'reco',
  themeConfig: {
    // 404腾讯公益false为关闭
    noFoundPageByTencent: false,
    themeMode: 'dark',
    // valineConfig: {
    //   appId: '...', // your appId
    //   appKey: '...', // your appKey
    // },
    nav: [
      {
        text: '主页',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: '时间轴',
        link: '/timeline/',
        icon: 'reco-date',
      },
      {
        text: '滴生活',
        icon: 'reco-account',
        items: [
          {
            text: '关于我',
            link: '/docs/myself/',
          },
        ],
      },
      {
        text: '文档馆',
        icon: 'reco-message',
        items: [
          {
            text: 'vuepress中文手册',
            link: 'https://vuepress.vuejs.org/zh/',
          },
          {
            text: 'vuepress-theme-reco手册',
            link: 'https://vuepress-theme-reco.recoluan.com/views/1.x/',
          },
          {
            text: 'markdown手册',
            link: 'https://markdown.com.cn/',
          },
        ],
      },
      {
        text: '工具袋',
        icon: 'reco-message',
        items: [
          {
            text: '徽章生成器',
            link: 'https://shields.io/category/dependencies',
          },
          {
            text: 'icons图标',
            link: 'https://fontawesome.com/icons',
          },
        ],
      },
    ],
    sidebar: {
      '/docs/myself/': ['', 'theme', 'plugin', 'api'],
    },
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '滴小栈',
      },
      tag: {
        location: 3,
        text: '标签',
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/' },
        {
          icon: 'reco-qq',
          link: 'https://qm.qq.com/cgi-bin/qm/qr?k=0obX89IkfPDsnBUTrze0RSol-09alPVb&noverify=0&personal_qrcode_source=4',
        },
      ],
    },
    friendLink: [
      {
        title: '后来的我们',
        desc: '未成定局的事就不要弄得人尽皆知',
        logo:'/default.png',
        link: 'https://zyj_yida.gitee.io/blog/',
      },
      {
        title: '尘墨成', //站点名称
        desc: '错把陈醋当成墨，写尽半生纸上酸。', //站点简介
        logo:'/default.png',
        link: 'https://www.dustink.cn/', //站点网址
      },
      {
        title: 'zealsay说你想说', //站点名称
        desc: '上天是公平的，只要努力就会有收获，否则就是你不够努力。', //站点简介
        logo:'/default.png',
        link: 'https://www.zealsay.com/', //站点网址
      },
    ],
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: '奔跑的蜗牛',
    authorAvatar: '/avatar.png',
    record: '等待备案中...',
    startYear: '2023',
    mottos: [
      {
        zh: '愿你保持初心和善良,笑里尽是温暖与坦荡。',
        en: 'May you keep your original heart and kindness, and smile with warmth and magnanimity.',
      },
      {
        zh: '年轻就是无限的可能。',
        en: 'Youth means limitless possibilities.',
      },
      {
        zh: '真正的梦就是现实的彼岸。',
        en: 'Real dream is the other shore of reality.',
      },
      {
        zh: '不为模糊不清的未来担忧，只为清清楚楚的现在努力。',
        en: "Don't worry about the vague future, just strive for the clear present.",
      },
      {
        zh: '与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。',
        en: "Rather than pretending to influence others, it's better to grind your teeth and repair yourself.",
      },
      {
        zh: '上天是公平的，只要努力就会有收获，否则就是你不够努力。',
        en: 'God is fair, as long as effort will include results, otherwise is you hard enough.',
      },
      {
        zh: '人生没有后悔，我们只能尽力去不让自己后悔。',
        en: 'Life without regret, we can only do our best to not to regret.',
      },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  plugins: [
    // [
    //   '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    //   {
    //     theme: [
    //       'miku',
    //       'whiteCat',
    //       'haru1',
    //       'haru2',
    //       'haruto',
    //       'koharu',
    //       'izumi',
    //       'shizuku',
    //       'wanko',
    //       'blackCat',
    //       'z16',
    //     ],
    //     clean: false,
    //     messages: {
    //       welcome: '欢迎来到我的博客',
    //       home: '心里的花，我想要带你回家。',
    //       theme: '好吧，希望你能喜欢我的其他小伙伴。',
    //       close: '你不喜欢我了吗？痴痴地望着你。',
    //     },
    //     messageStyle: { right: '68px', bottom: '290px' },
    //     width: 250,
    //     height: 320,
    //   },
    // ],
    [
      '@vuepress-reco/vuepress-plugin-bulletin-popover',
      {
        title: '公告',
        body: [
          {
            type: 'title',
            content: '🎉欢迎来到我的博客🎉',
            style: 'text-aligin: center;',
          },
          {
            type: 'title',
            content: '最近更新内容',
            style: 'text-aligin: center;',
          },
          {
            type: 'text',
            content: '1.博客增加了首页气泡',
            style: 'text-align: center;',
          },
          {
            type: 'text',
            content: '2.添加了格言打字机效果',
            style: 'text-align: center;',
          },
          {
            type: 'text',
            content: '3.添加了公告板块',
            style: 'text-align: center;',
          },
          {
            type: 'text',
            content: 'tips:博客可以自己更换主题颜色推荐dark浏览更佳,博客作用为学习和记录生活。后面会逐渐加入一些新的元素和功能，欢迎关注————滴滴答&Log(2023.4.16)',
            style: 'text-align: center;',
          },
        ],

      },
    ],
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          // 本地文件示例
          // {
          //   name: '장가갈 수 있을까',
          //   artist: '咖啡少年',
          //   url: '/bgm/1.mp3',
          //   cover: '/bgm/1.jpg'
          // },
          // 网络文件示例
          {
            name: '강남역 4번 출구',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg',
          },
          {
            name: '用胳膊当枕头',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg',
          },
        ],
      },
    ],
    [
      'vuepress-plugin-cursor-effects',
      {
        size: 2, // size of the particle, default: 2
        shape: 'circle', // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      }
    ],
    [
      'ribbon-animation',
      {
        size: 90, // 默认数据
        opacity: 0.3, //  透明度
        zIndex: -1, //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: '80%',
          // 色带HSL亮度量
          colorBrightness: '60%',
          // 带状颜色不透明度
          colorAlpha: 0.65,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: 'center',
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true,
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true, // 滑动彩带
      },
    ],
    [
      'dynamic-title', {
      showIcon: '/favicon.ico',
      showText: '客官欢迎回来~',
      hideIcon: '/favicon.ico',
      hideText: '客官不要走嘛~',
      recoverTime: 2000,}
    ],
    [
      '@vuepress-reco/vuepress-plugin-pagation',{
        
      }
    ],//分页插件
  ],
}
