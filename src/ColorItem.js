import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

import { SELECTSTYLE } from './constants';

class ColorItem extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    isDelete: PropTypes.bool.isRequired,
    isRemove: PropTypes.bool.isRequired,
    onDeleteChange: PropTypes.func.isRequired,
    onCancelDelete: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      style: {},
      active: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isRemove !== this.props.isRemove) {
      this.setState({
        style: {},
        active: false,
      });
    }
  }

  /** 删除色块 */
  handleDelete() {
    const { id, isDelete, isRemove } = this.props;
    const { active } = this.state;

    if (isDelete && isRemove) {
      if (!active) {
        this.props.onDeleteChange(id);
        this.setState({
          style: SELECTSTYLE,
        });
      } else {
        this.props.onCancelDelete(id);
        this.setState({
          style: {},
        });
      }
      this.setState({
        active: !active,
      });
    }
  }

  render() {
    const { color, isDelete, isRemove } = this.props;

    const originStyle = { background: color, ...this.state.style };
    const activeStyle = !isDelete ? { opacity: 0.15 } : null;
    const colorStyle = isRemove ? Object.assign(originStyle, activeStyle) : originStyle;

    return (
      <span
        className="colorTheme-li-span"
        style={colorStyle}
        onClick={this.handleDelete}
      >
      </span>
    );
  }
}

export default ColorItem;
