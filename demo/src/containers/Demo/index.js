import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';

import { Component as ColorTheme } from '../../../../src';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions';

const mapStateToProps = ({ colorTheme, demo }) => ({ colorTheme, demo });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

class Demo extends Component {
  static propTypes = {
    demo: PropTypes.object.isRequired,
    colorTheme: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  handleColorChange = (type, index, colorArr) => {
    const { actions } = this.props;

    actions.changeOption('barOption', ['color'], colorArr);
    actions.changeOption('pieOption', ['color'], colorArr);
    actions.changeThemeSet(type, index, 'color', colorArr);
  };

  handleBgChange = (type, index, bgColor) => {
    const { actions } = this.props;

    actions.changeOption('barOption', ['title', 'textStyle', 'color'], bgColor);
    actions.changeOption('pieOption', ['title', 'textStyle', 'color'], bgColor);
    actions.changeBg(bgColor);
    if (type === 'theme') {
      actions.changeThemeSet(type, index, 'background', bgColor);
    }
  };

  render() {
    const { colorTheme, demo } = this.props;
    const { type } = colorTheme.toJS();
    const {
      barOption,
      pieOption,
      themes,
      colors,
      bgs,
      background,
    } = demo.toJS();

    return (
      <div className="container">
        <div className="theme">
          <h1 className="theme-title">Color Theme</h1>
          <div className="theme-item">
            <div className="theme-item-title">默认主题：</div>
            <ColorTheme
              type="theme"
              theme={themes}
              active={type === 'theme'}
              onhandleColorChange={this.handleColorChange}
              onhandleBgChange={this.handleBgChange}
            />
          </div>
          <div className="theme-item">
            <div className="theme-item-title">前景色：</div>
            <ColorTheme
              type="color"
              theme={colors}
              active={type === 'color'}
              onhandleColorChange={this.handleColorChange}
            />
          </div>
          <div className="theme-item">
            <div className="theme-item-title">背景色：</div>
            <ColorTheme
              type="bg"
              theme={bgs}
              active={type === 'bg'}
              onhandleBgChange={this.handleBgChange}
            />
          </div>
        </div>

        <div className="theme-preview" style={{ background }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
