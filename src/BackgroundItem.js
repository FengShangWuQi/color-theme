import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class BackgroundItem extends Component {
  constructor() {
    super();
    this.handleBgChange = this.handleBgChange.bind(this);
  }

  /** 处理背景 */
  handleBgChange() {
    const { background, id } = this.props;

    this.props.onBgChange(background);
    this.props.onClickChange(id);
  }

  render() {
    const { background, active } = this.props;
    const style = active ?
      {
        borderColor: '#49a9ee',
        boxShadow: '0 0 0 2px rgba(16, 142, 233, 0.2)',
        background,
      } :
      {
        background,
      };

    return (
      <span
        style={style}
        className="colorTheme-li-span"
        onClick={this.handleBgChange}
      >
      </span>
    );
  }
}

BackgroundItem.propTypes = {
	id: PropTypes.number,
  active: PropTypes.bool,
  background: PropTypes.string,
  onBgChange: PropTypes.func,
  onClickChange: PropTypes.func,
};

export default BackgroundItem;
