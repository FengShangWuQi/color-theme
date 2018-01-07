import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../style.css';

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

  handleDelete = e => {
    const { id, isDelete, isRemove } = this.props;
    const { active } = this.state;

    if (isDelete && isRemove) {
      if (!active) {
        this.props.onDeleteChange(id);
        this.setState({
          style: {
            borderColor: '#49a9ee',
            boxShadow: '0 0 0 2px rgba(16, 142, 233, 0.2)',
          },
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
      e.stopPropagation();
    }
  };

  render() {
    const { color, isDelete, isRemove } = this.props;

    const originStyle = { background: color, ...this.state.style };
    const activeStyle = !isDelete ? { opacity: 0.15 } : null;
    const colorStyle = isRemove
      ? Object.assign(originStyle, activeStyle)
      : originStyle;

    return (
      <span
        className="colorTheme-li-span"
        style={colorStyle}
        onClick={e => this.handleDelete(e)}
      />
    );
  }
}

export default ColorItem;
