import { fromJS } from 'immutable';
import * as at from './actionTypes';

const INITIAL_STATE = fromJS({
  barOption: {
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
      {
        name: '直接访问',
        type: 'bar',
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: '邮件营销',
        type: 'bar',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: '联盟广告',
        type: 'bar',
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: '视频广告',
        type: 'bar',
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: '搜索引擎',
        type: 'bar',
        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      },
      { name: '其他', type: 'bar', data: [62, 82, 91, 84, 109, 110, 120] },
    ],
    color: ['#D87C7C', '#919E8B', '#D7AB82', '#6E7074', '#61A0A8'],
  },
  pieOption: {
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
  },
  themes: [
    {
      color: ['#D87C7C', '#919E8B', '#D7AB82', '#6E7074', '#61A0A8'],
      background: '#fff',
    },
    {
      color: ['#DD6B66', '#759AA0', '#E69D87', '#8DC1A9', '#EA7E53'],
      background: '#333333',
    },
  ],
  colors: [
    {
      color: [],
    },
  ],
  bgs: ['#333333', '#293441', '#5B5C6E', '#fff'],
  background: '#333',
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case at.CHANGEOPTION:
      return state.setIn([action.option, ...action.key], fromJS(action.value));
    case at.CHANGETHEMESET:
      return state.setIn(
        [`${action.data}s`, action.index, action.key],
        fromJS(action.colors)
      );
    case at.CHANGEBG:
      return state.set('background', fromJS(action.background));
    default:
      return state;
  }
};
