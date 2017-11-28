import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SELECTSTYLE } from './constants';

import './style.css';

import ColorItem from './ColorItem';

class ColorThemeItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    disRemove: PropTypes.bool.isRequired,
    color: PropTypes.array.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    onColorChange: PropTypes.func.isRequired,
    onBgChange: PropTypes.func.isRequired,
    onAddChange: PropTypes.func.isRequired,
    onDeleteChange: PropTypes.func.isRequired,
    onClickChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      NUM: this.props.color.length,
      isRemove: false,
      removeItems: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.props.active) {
      this.setState({
        isRemove: false,
        removeItems: [],
      });
    }
  }

  handleThemeChange = () => {
    const { id, color, backgroundColor } = this.props;

    this.props.onColorChange(color);
    if (!!backgroundColor) {
      this.props.onBgChange(backgroundColor);
    }
    this.props.onClickChange(id);
  };

  handleAdd = () => {
    if (!this.state.isRemove) {
      this.props.onAddChange(this.props.color);
    }
  };

  handleDeleteChange = key => {
    const { removeItems } = this.state;

    removeItems.push(key);
    this.setState({
      removeItems,
    });
  };

  handleCancelDelete = key => {
    const { removeItems } = this.state;

    const index = removeItems.indexOf(key);
    if (index !== -1) {
      removeItems.splice(index, 1);
      this.setState({
        removeItems,
      });
    }
  };

  handleDelete = () => {
    const { isRemove, removeItems } = this.state;

    if (isRemove && removeItems.length !== 0) {
      this.props.onDeleteChange(removeItems);
      this.setState({
        removeItems: [],
      });
    }
    if (!this.props.disRemove) {
      this.setState({
        isRemove: !isRemove,
      });
    }
  };

  render() {
    const { color, backgroundColor, active, disRemove } = this.props;
    const { isRemove, NUM } = this.state;

    const liStyle = active
      ? Object.assign(
          {
            height: 'auto',
            backgroundColor,
          },
          SELECTSTYLE
        )
      : { height: '31px', backgroundColor };
    const oneSetTheme = color.map((curr, index) => (
      <ColorItem
        key={index}
        id={index}
        color={curr}
        isDelete={backgroundColor === '' || !!(index > NUM - 1)}
        isRemove={isRemove && !disRemove}
        onDeleteChange={this.handleDeleteChange}
        onCancelDelete={this.handleCancelDelete}
      />
    ));

    return (
      <li
        className="colorTheme-li"
        style={liStyle}
        onClick={this.handleThemeChange}
      >
        {oneSetTheme}
        <span
          className="colorTheme-li-span colorTheme-li-icon"
          onClick={this.handleAdd}
        >
          +
        </span>
        <span
          className="colorTheme-li-span colorTheme-li-icon"
          onClick={this.handleDelete}
          style={isRemove ? { color: '#fff', background: '#424242' } : null}
        >
          -
        </span>
      </li>
    );
  }
}

export default ColorThemeItem;
