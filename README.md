
> # [color-theme](https://www.npmjs.com/package/color-theme)

一个方便的颜色主题组件

[![Build Status][travis-svg]][travis-url]
[![npm download][download-img]][download-url]
[![license][license-img]][license-url]

[travis-svg]: https://travis-ci.org/FengShangWuQi/color-theme.svg
[travis-url]: https://travis-ci.org/FengShangWuQi/color-theme
[download-img]: https://img.shields.io/npm/dt/color-theme.svg
[download-url]: https://www.npmjs.com/package/color-theme
[license-img]: https://img.shields.io/npm/l/color-theme.svg
[license-url]: https://github.com/FengShangWuQi/color-theme/blob/master/LICENSE

## Demo
- [切换 ECharts 图表颜色主题](https://fengshangwuqi.github.io/color-theme-demo/)

## 安装
```
yarn add color-theme
```
[![color-theme](https://nodei.co/npm/color-theme.png)](https://npmjs.org/package/color-theme)

## 使用
```javaScipt
import ColorTheme from 'color-theme';

<ColorTheme
  type="theme"
  theme={COLORTHEME}
  active={active === 'theme'}
  onhandleColorChange={this.handleColorChange}
  onhandleBgChange={this.handleBgChange}
  onhandleClick={this.handleThemeClick}
/>
```

> 注意：当 `ColorTheme` 类型为 `color` 时，没有 `onhandleBgChange` props，`bg` 同理

## API
<table>
  <thead>
    <tr>
      <th>props</th>
      <th>类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>string</td>
      <td>theme | color | bg</td>
    <tr>
    <tr>
      <td>theme</td>
      <td>array</td>
      <td>颜色数组</td>
    <tr>
    <tr>
      <td>active</td>
      <td>bool</td>
      <td>是否激活</td>
    <tr>
    <tr>
      <td>onhandleColorChange</td>
      <td>func</td>
      <td>处理颜色改变</td>
    <tr>
    <tr>
      <td>onhandleBgChange</td>
      <td>func</td>
      <td>处理背景改变</td>
    <tr>
    <tr>
      <td>onhandleClick</td>
      <td>func</td>
      <td>处理点击主题</td>
    <tr>
  </tbody>
</table>

## LICENSE
MIT@[fengshangwuqi](https://github.com/FengShangWuQi)
