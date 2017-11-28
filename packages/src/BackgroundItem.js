import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SELECTSTYLE } from './constants';

import './style.css';

class BackgroundItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    active: PropTypes.bool,
    background: PropTypes.string,
    onBgChange: PropTypes.func,
    onClickChange: PropTypes.func,
  };

  handleBgChange = () => {
    const { background, id } = this.props;

    this.props.onBgChange(background);
    this.props.onClickChange(id);
  };

  render() {
    const { background, active } = this.props;
    const style = active
      ? Object.assign(SELECTSTYLE, {
          background,
        })
      : {
          background,
        };

    return (
      <span
        style={style}
        className="colorTheme-li-span"
        onClick={this.handleBgChange}
      />
    );
  }
}

export default BackgroundItem;
