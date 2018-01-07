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

* [切换 ECharts 图表主题](https://fengshangwuqi.github.io/color-theme/demo/dist)

![](./public/color-theme.png)

## 安装

```
yarn add color-theme
```

[![color-theme](https://nodei.co/npm/color-theme.png)](https://npmjs.org/package/color-theme)

## 使用

```javaScipt
/* 引入 Compoent 接口 */
import { Component as ColorTheme } from 'color-theme';

<ColorTheme
  type="theme"
  theme={themes}
  active={type === 'theme'}
  onhandleColorChange={this.handleColorChange}
  onhandleBgChange={this.handleBgChange}
/>

/* 引入 reducer 接口 */
import { reducer as colorTheme } from 'color-theme';
```

## API

<table>
  <thead>
    <tr>
      <th>props</th>
      <th>描述</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>主题类型，可选 theme | color | bg</td>
      <td>string</td>
      <td>-</td>
    <tr>
    <tr>
      <td>theme</td>
      <td>颜色主题数组</td>
      <td>array</td>
      <td>-</td>
    <tr>
    <tr>
      <td>active</td>
      <td>是否激活，在需要不同类型的颜色主题组件时使用</td>
      <td>boolean</td>
      <td>false</td>
    <tr>
    <tr>
      <td>onhandleColorChange</td>
      <td>前景色改变的回调</td>
      <td>Function</td>
      <td>-</td>
    <tr>
    <tr>
      <td>onhandleBgChange</td>
      <td>背景色改变的回调</td>
      <td>Function</td>
      <td>-</td>
    <tr>
  </tbody>
</table>


> ⚠️ 注意：当 `ColorTheme` type 为 `color` 时，没有 `onhandleBgChange` props，`bg` 同理，当 type 为 `theme` 时，theme 是一个 `包含 color 和 background 的对象数组`，当 type 为 `color` 时，theme 是一个 `包含 color 的对象数组`。当  type 为 `bg` 时，theme 是一个 `color 数组`

## LICENSE

MIT@[fengshangwuqi](https://github.com/FengShangWuQi)
