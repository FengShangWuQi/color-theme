import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { PhotoshopPicker } from 'react-color';

import './style.css';

import ColorThemeItem from './ColorThemeItem';
import BackgroundItem from './BackgroundItem';

class ColorTheme extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    theme: PropTypes.array.isRequired,
    active: PropTypes.bool,
    onhandleColorChange: PropTypes.func,
    onhandleBgChange: PropTypes.func,
    onhandleClick: PropTypes.func,
  };

  static defaultProps = {
    active: false,
  };

  constructor() {
    super();
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleBgChange = this.handleBgChange.bind(this);
    this.handleClickColor = this.handleClickColor.bind(this);
    this.handleAddColor = this.handleAddColor.bind(this);
    this.handleDeleteColor = this.handleDeleteColor.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.state = {
      pickerVisible: false,
      colorArr: [],
      pickerColor: '#D87C7C',
      selected: '',
      overlayVisible: 'none',
    };
  }

  /** 处理颜色 */
  handleColorChange(colorArr) {
    const { type } = this.props;

    this.props.onhandleColorChange(colorArr);
    this.props.onhandleClick(type);

    this.setState({
      colorArr,
      selected: '',
    });
  }

  /** 处理背景 */
  handleBgChange(bgColor) {
    this.props.onhandleBgChange(bgColor);
    this.props.onhandleClick(this.props.type);

    this.setState({
      selected: '',
    });
  }

  /** 处理点击 */
  handleClickColor(key) {
    this.setState({
      selected: key,
    });
  }

  /** 增加色块 */
  handleAddColor(colorArr) {
    this.setState({
      colorArr,
      pickerVisible: true,
      overlayVisible: 'block',
    });
  }

  /** 删除色块 */
  handleDeleteColor(colors) {
    const { colorArr } = this.state;

    _.remove(colorArr, (curr, index) => colors.indexOf(index) !== -1);
    this.props.onhandleColorChange(colorArr);
  }

  /** 处理颜色选择器选择 */
  handleAccept() {
    const { colorArr, pickerColor } = this.state;

    colorArr.push(pickerColor);
    this.props.onhandleColorChange(colorArr);
    this.setState({
      pickerVisible: false,
      overlayVisible: 'none',
    });
  }

  /** 处理颜色选择器取消 */
  handleCancel() {
    this.setState({
      pickerVisible: false,
      overlayVisible: 'none',
    });
  }

  /** 处理颜色选择器修改 */
  handleChangeComplete(color) {
    this.setState({
      pickerColor: color.hex,
    });
  }

  /** 渲染主题 */
  renderColorTheme() {
    const { active, type } = this.props;

    return this.props.theme.map((curr, index) => (
      <ColorThemeItem
        key={index}
        id={index}
        active={active && index === this.state.selected}
        disRemove={this.state.pickerVisible}
        color={curr.color}
        backgroundColor={type === 'theme' ? curr.backgroundColor : ''}
        onColorChange={this.handleColorChange}
        onBgChange={this.handleBgChange}
        onAddChange={this.handleAddColor}
        onDeleteChange={this.handleDeleteColor}
        onClickChange={this.handleClickColor}
      />
    ));
  }

  /** 渲染背景 */
  renderBg() {
    return this.props.theme.map((color, index) => (
      <BackgroundItem
        key={index}
        id={index}
        active={this.props.active && index === this.state.selected}
        background={color}
        onBgChange={this.handleBgChange}
        onClickChange={this.handleClickColor}
      />
    ));
  }

  render() {
    const { pickerColor, pickerVisible, overlayVisible } = this.state;

    return (
      <div className="color-theme">
        <ul className="theme-ul">
          { this.props.type === 'bg' ? this.renderBg() : this.renderColorTheme() }
        </ul>
        <div className="color-picker" style={{ display: pickerVisible ? 'block' : 'none' }}>
          <PhotoshopPicker
            color={pickerColor}
            header="颜色选择器"
            onAccept={this.handleAccept}
            onCancel={this.handleCancel}
            onChangeComplete={this.handleChangeComplete}
          />
        </div>
        <div style={{ display: overlayVisible }} className="overlay"></div>
      </div>
    );
  }
}

export default ColorTheme;
