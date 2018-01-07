import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import { getSelectedStyle } from '../../utils';

import '../../style.css';

const mapStateToProps = ({ colorTheme }) => ({ colorTheme });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

class BackgroundItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    active: PropTypes.bool,
    background: PropTypes.string,
    onBgChange: PropTypes.func,
    onClickChange: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
  };

  handleBgChange = () => {
    const { id, background } = this.props;

    this.props.onBgChange(id, background);
    this.props.onClickChange(id);
  };

  render() {
    const { background, active } = this.props;
    const style = active ? getSelectedStyle() : {};

    return (
      <span
        style={Object.assign({ background }, style)}
        className="colorTheme-li-span"
        onClick={this.handleBgChange}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundItem);
