/* 机械制造基础 II 课程章节清单
 * 首页 index.html 与阅读页 viewer.html 共用此文件。
 * 更新讲义时只需替换 pdf/ 下的文件，并同步本文件中的 pages 字段。 */
window.COURSE = {
  title: '机械制造基础 II',
  subtitle: '课程讲义',
  author: '周计明',
  org: '西北工业大学',
  term: '2026 年 · 秋',
  site: 'https://kivinchoa01.github.io/fund-manufacturing/',
  gitee: 'https://gitee.com/zhou-jiming/fund-manufacturing',
  github: 'https://github.com/kivinchoa01/fund-manufacturing',
  // PDF.js 阅读器内加载 PDF 的两条线路
  cdnBase: 'https://cdn.jsdelivr.net/gh/kivinchoa01/fund-manufacturing@master/pdf/',
  localBase: 'pdf/'
};

/* group 决定首页的分组标题与卡片配色 */
window.CHAPTER_GROUPS = [
  { key: 'intro',    name: '课程导引',       note: '课程定位、知识框架与学习方法' },
  { key: 'forming',  name: '材料成形',       note: '液态成形、塑性成形与连接成形' },
  { key: 'machining', name: '切削加工',      note: '切削原理、表面加工与工艺设计' }
];

window.CHAPTERS = [
  {
    id: '01',
    file: '01_课程概述.pdf',
    title: '课程概述',
    pages: 7,
    group: 'intro',
    tagline: '课程定位、教学内容与考核方式',
    desc: '说明课程在培养方案中的位置、教学内容与学时安排、教学方式与考核要求，给出整门课的学习路线图。',
    topics: ['课程背景', '内容体系', '考核方式']
  },
  {
    id: '02',
    file: '02_绪论.pdf',
    title: '绪论',
    pages: 37,
    group: 'intro',
    tagline: '制造、制造业与工艺方法概览',
    desc: '从制造的基本概念、制造业的发展与产品构成出发，介绍材料成形与切削加工两大类工艺方法，建立本课程的知识框架。',
    topics: ['制造的概念', '制造业发展', '工艺方法概览']
  },
  {
    id: '03',
    file: '03_铸造.pdf',
    title: '铸造',
    pages: 68,
    group: 'forming',
    tagline: '液态金属成形',
    desc: '讲解液态金属充型与收缩规律、砂型铸造工艺、常用特种铸造方法、铸造工艺设计与常见铸造缺陷。',
    topics: ['充型与收缩', '砂型铸造', '特种铸造', '铸造缺陷']
  },
  {
    id: '04',
    file: '04_压力加工.pdf',
    title: '压力加工',
    pages: 100,
    group: 'forming',
    tagline: '金属塑性成形',
    desc: '介绍金属塑性变形的基本规律，系统讲解锻造、轧制、挤压、拉拔、冲压等压力加工方法、模具与工艺设计要点。',
    topics: ['塑性变形', '锻造', '轧制/挤压/拉拔', '冲压']
  },
  {
    id: '05',
    file: '05_焊接.pdf',
    title: '焊接',
    pages: 71,
    group: 'forming',
    tagline: '金属永久连接',
    desc: '介绍焊接方法分类、焊接电弧与焊接冶金过程，讲解常用熔焊、压焊与钎焊方法、焊接结构工艺性及缺陷控制。',
    topics: ['焊接电弧', '熔焊/压焊/钎焊', '常用焊接方法', '焊接缺陷']
  },
  {
    id: '06',
    file: '06_毛坯成形方法选择及质量控制.pdf',
    title: '毛坯成形方法选择及质量控制',
    pages: 14,
    group: 'forming',
    tagline: '毛坯选型与质量',
    desc: '按轴杆类、机架箱体类、盘套类等零件类型，讲解毛坯成形方法的选择原则、材料与批量因素，以及毛坯质量控制要点。',
    topics: ['毛坯分类', '选择原则', '质量控制']
  },
  {
    id: '07',
    file: '07_切削加工基础知识.pdf',
    title: '切削加工基础知识',
    pages: 82,
    group: 'machining',
    tagline: '切削原理与刀具',
    desc: '介绍切削运动与切削要素、刀具几何角度、切削力与切削温度、刀具磨损与刀具材料，以及材料切削加工性和磨削基础。',
    topics: ['切削要素', '刀具角度', '切削过程', '刀具材料']
  },
  {
    id: '08',
    file: '08_零件表面的加工方法.pdf',
    title: '零件表面的加工方法',
    pages: 73,
    group: 'machining',
    tagline: '各类表面的加工工艺',
    desc: '系统讲解车削、铣削、钻削、镗削、磨削、齿形加工及精整与特种加工等零件表面加工方法，说明其精度、表面质量与适用范围。',
    topics: ['车/铣/钻/镗', '磨削', '齿形加工', '特种加工']
  },
  {
    id: '09',
    file: '09_机械零件的结构工艺性.pdf',
    title: '机械零件的结构工艺性',
    pages: 17,
    group: 'machining',
    tagline: '面向制造的结构设计',
    desc: '从铸造、锻造、切削加工和装配等角度，讲解零件结构工艺性的评价与改进，使零件在满足使用要求的前提下便于高效低成本制造。',
    topics: ['结构工艺性', '铸锻结构', '切削加工结构', '装配结构']
  },
  {
    id: '10',
    file: '10_机械加工工艺过程的基础知识.pdf',
    title: '机械加工工艺过程的基础知识',
    pages: 63,
    group: 'machining',
    tagline: '工艺规程与工艺尺寸',
    desc: '介绍生产过程与工艺过程的组成、定位与夹紧、工艺尺寸链、加工精度与表面质量，以及机械加工工艺规程的制定方法。',
    topics: ['工序组成', '定位与夹紧', '工艺尺寸链', '工艺规程']
  }
];
