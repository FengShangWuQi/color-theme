import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PhotoshopPicker } from 'react-color';
import * as Actions from './actions';
import ColorThemeItem from './components/ColorThemeItem';
import BackgroundItem from './components/BackgroundItem';

import './style.css';

const mapStateToProps = ({ colorTheme }) => ({ colorTheme });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

class ColorTheme extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    theme: PropTypes.array.isRequired,
    active: PropTypes.bool,
    onhandleColorChange: PropTypes.func,
    onhandleBgChange: PropTypes.func,
    colorTheme: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
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
      overlayVisible: 'none',
    };
  }

  handleColorChange = (id, colorArr) => {
    const { type, actions } = this.props;

    this.props.onhandleColorChange(type, id, colorArr);
    actions.changeTheme(colorArr);
    this.setState({
      colorArr,
    });
  };

  handleBgChange = (id, bgColor) => {
    const { type, actions } = this.props;

    this.props.onhandleBgChange(type, id, bgColor);
    actions.changeBg(bgColor);
  };

  handleClick = id => {
    const { type, actions } = this.props;

    actions.changeType(type);
    actions.changeIndex(id);
  };

  handleAddColor = colorArr => {
    this.setState({
      colorArr,
      pickerVisible: true,
      overlayVisible: 'block',
    });
  };

  handleDeleteColor = colors => {
    const { type, colorTheme, actions } = this.props;
    const { index } = colorTheme.toJS();
    const { colorArr } = this.state;

    for (let i = colorArr.length - 1; i >= 0; i--) {
      if (colors.indexOf(i) !== -1) {
        colorArr.splice(i, 1);
      }
    }

    this.props.onhandleColorChange(type, index, colorArr);
    actions.changeTheme(colorArr);
    this.setState({
      colorArr,
    });
  };

  handleAccept = () => {
    const { type, colorTheme, actions } = this.props;
    const { index } = colorTheme.toJS();
    const { colorArr, pickerColor } = this.state;
    colorArr.push(pickerColor);

    this.props.onhandleColorChange(type, index, colorArr);
    actions.changeTheme(colorArr);
    this.setState({
      colorArr,
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
    const { active, type, colorTheme } = this.props;
    const { index } = colorTheme.toJS();

    return this.props.theme.map((curr, i) => (
      <ColorThemeItem
        key={i}
        id={i}
        active={active && i === index}
        disRemove={this.state.pickerVisible}
        color={curr.color}
        background={type === 'theme' ? curr.background : ''}
        onColorChange={this.handleColorChange}
        onBgChange={this.handleBgChange}
        onAddChange={this.handleAddColor}
        onDeleteChange={this.handleDeleteColor}
        onClickChange={this.handleClick}
      />
    ));
  };

  renderBg = () => {
    const { colorTheme, active } = this.props;
    const { index } = colorTheme.toJS();

    return this.props.theme.map((color, i) => (
      <BackgroundItem
        key={i}
        id={i}
        active={active && i === index}
        background={color}
        onBgChange={this.handleBgChange}
        onClickChange={this.handleClick}
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

export default connect(mapStateToProps, mapDispatchToProps)(ColorTheme);
