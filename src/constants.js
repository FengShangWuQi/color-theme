// echarts option
export const BAROPTION = {
  title: {
    text: '柱状图',
    textStyle: {
      color: '#fff',
    },
  },
  xAxis: [
    {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLabel: { show: false },
      axisTick: { show: false },
      axisLine: { show: false },
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: { show: false },
      axisTick: { show: false },
      axisLine: { show: false },
    },
  ],
  series: [
    { name: '直接访问', type: 'bar', data: [320, 332, 301, 334, 390, 330, 320] },
    { name: '邮件营销', type: 'bar', data: [120, 132, 101, 134, 90, 230, 210] },
    { name: '联盟广告', type: 'bar', data: [220, 182, 191, 234, 290, 330, 310] },
    { name: '视频广告', type: 'bar', data: [150, 232, 201, 154, 190, 330, 410] },
    {
      name: '搜索引擎',
      type: 'bar',
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
    },
    { name: '其他', type: 'bar', data: [62, 82, 91, 84, 109, 110, 120] },
  ],
  color: ['#D87C7C', '#919E8B', '#D7AB82', '#6E7074', '#61A0A8'],
};
export const PIEOPTION = {
  title: {
    text: '饼图',
    textStyle: {
      color: '#fff',
    },
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['50%', '70%'],
      label: {
        normal: {
          show: false,
        },
      },
      labelLine: { normal: { show: false } },
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' },
      ],
    },
  ],
  color: ['#D87C7C', '#919E8B', '#D7AB82', '#6E7074', '#61A0A8'],
};

/** 选中的状态 */
export const SELECTSTYLE = {
  borderColor: '#49a9ee',
  boxShadow: '0 0 0 2px rgba(16, 142, 233, 0.2)',
};

/** 主题色 */
export const COLORTHEME = [
  {
    color: ['#D87C7C', '#919E8B', '#D7AB82', '#6E7074', '#61A0A8'],
    backgroundColor: '#fff',
  },
  {
    color: ['#DD6B66', '#759AA0', '#E69D87', '#8DC1A9', '#EA7E53'],
    backgroundColor: '#333333',
  },
];

/** 前景色 */
export const COLOR = [
  {
    color: [],
  },
];

/** 背景色 */
export const BGTHEME = ['#333333', '#293441', '#5B5C6E', '#fff'];
