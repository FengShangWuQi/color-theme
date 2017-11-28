import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PhotoshopPicker } from 'react-color';
import ColorThemeItem from './ColorThemeItem';
import BackgroundItem from './BackgroundItem';

import './style.css';

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
    this.state = {
      pickerVisible: false,
      colorArr: [],
      pickerColor: '#D87C7C',
      selected: '',
      overlayVisible: 'none',
    };
  }

  handleColorChange = colorArr => {
    const { type } = this.props;
    this.props.onhandleColorChange(colorArr);
    this.props.onhandleClick(type);

    this.setState({
      colorArr,
      selected: '',
    });
  };

  handleBgChange = bgColor => {
    this.props.onhandleBgChange(bgColor);
    this.props.onhandleClick(this.props.type);

    this.setState({
      selected: '',
    });
  };

  handleClickColor = key => {
    this.setState({
      selected: key,
    });
  };

  handleAddColor = colorArr => {
    this.setState({
      colorArr,
      pickerVisible: true,
      overlayVisible: 'block',
    });
  };

  handleDeleteColor = colors => {
    const { colorArr } = this.state;

    colorArr.forEach((curr, index) => {
      if (colors.indexOf(index) !== -1) {
        colorArr.splice(index, 1);
      }
    });
    this.props.onhandleColorChange(colorArr);
  };

  handleAccept = () => {
    const { colorArr, pickerColor } = this.state;

    colorArr.push(pickerColor);
    this.props.onhandleColorChange(colorArr);
    this.setState({
      pickerVisible: false,
      overlayVisible: 'none',
    });
  };

  handleCancel = () => {
    this.setState({
      pickerVisible: false,
      overlayVisible: 'none',
    });
  };

  handleChangeComplete = color => {
    this.setState({
      pickerColor: color.hex,
    });
  };

  renderColorTheme = () => {
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
  };

  renderBg = () => {
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
  };

  render() {
    const { pickerColor, pickerVisible, overlayVisible } = this.state;

    return (
      <div className="color-theme">
        <ul className="theme-ul">
          {this.props.type === 'bg' ? this.renderBg() : this.renderColorTheme()}
        </ul>
        <div
          className="color-picker"
          style={{ display: pickerVisible ? 'block' : 'none' }}
        >
          <PhotoshopPicker
            color={pickerColor}
            header="颜色选择器"
            onAccept={this.handleAccept}
            onCancel={this.handleCancel}
            onChangeComplete={this.handleChangeComplete}
          />
        </div>
        <div style={{ display: overlayVisible }} className="overlay" />
      </div>
    );
  }
}

export default ColorTheme;
