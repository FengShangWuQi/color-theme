import React, { Component } from 'react';
import ColorTheme from 'ColorTheme';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';

import './index.css';
import { BAROPTION, PIEOPTION, COLORTHEME, COLOR, BGTHEME } from './constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barOption: BAROPTION,
      pieOption: PIEOPTION,
      bg: '#333333',
    };
  }

  changeOption = (option, color) => {
    return (option.title.textStyle.color = color === '#fff' ? '#333' : '#fff');
  };

  handleColorChange = colorArr => {
    const { barOption, pieOption } = this.state;

    barOption.color = colorArr;
    pieOption.color = colorArr;
    this.setState({ barOption, pieOption });
  };

  handleBgChange = bgColor => {
    const { barOption, pieOption } = this.state;

    this.changeOption(barOption, bgColor);
    this.changeOption(pieOption, bgColor);
    this.setState({ bg: bgColor, barOption, pieOption });
  };

  handleThemeClick = type => {
    this.setState({ active: type });
  };

  render() {
    const { active, barOption, pieOption, bg } = this.state;

    return (
      <div className="container">
        <div className="theme">
          <h1 className="theme-title">Color Theme</h1>
          <div className="theme-item">
            <div className="theme-item-title">默认主题：</div>
            <ColorTheme
              type="theme"
              theme={COLORTHEME}
              active={active === 'theme'}
              onhandleColorChange={this.handleColorChange}
              onhandleBgChange={this.handleBgChange}
              onhandleClick={this.handleThemeClick}
            />
          </div>
          <div className="theme-item">
            <div className="theme-item-title">前景色：</div>
            <ColorTheme
              type="color"
              theme={COLOR}
              active={active === 'color'}
              onhandleColorChange={this.handleColorChange}
              onhandleClick={this.handleThemeClick}
            />
          </div>
          <div className="theme-item">
            <div className="theme-item-title">背景色：</div>
            <ColorTheme
              type="bg"
              theme={BGTHEME}
              active={active === 'bg'}
              onhandleBgChange={this.handleBgChange}
              onhandleClick={this.handleThemeClick}
            />
          </div>
        </div>

        <div className="theme-preview" style={{ background: bg }}>
          <div className="theme-preview-item">
            <ReactEchartsCore
              echarts={echarts}
              option={barOption}
              notMerge={true}
            />
          </div>
          <div className="theme-preview-item">
            <ReactEchartsCore
              echarts={echarts}
              option={pieOption}
              notMerge={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
