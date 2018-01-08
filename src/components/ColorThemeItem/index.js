import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ColorItem from '../ColorItem';
import * as Actions from '../../actions';
import { getSelectedStyle } from '../../utils';
import '../../style.css';

const mapStateToProps = ({ colorTheme }) => ({ colorTheme });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

class ColorThemeItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    disRemove: PropTypes.bool.isRequired,
    color: PropTypes.array.isRequired,
    background: PropTypes.string.isRequired,
    onColorChange: PropTypes.func.isRequired,
    onBgChange: PropTypes.func.isRequired,
    onAddChange: PropTypes.func.isRequired,
    onDeleteChange: PropTypes.func.isRequired,
    onClickChange: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
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
    const { id, color, background, disRemove } = this.props;
    const { isRemove } = this.state;

    if (!(!disRemove && isRemove)) {
      this.props.onClickChange(id);
      this.props.onColorChange(id, color);
      if (background) {
        this.props.onBgChange(id, background);
      }
    }
  };

  handleAdd = e => {
    const { isRemove } = this.state;
    if (!isRemove) {
      this.props.onAddChange(this.props.color);
    }
    if (!this.props.disRemove && isRemove) {
      e.stopPropagation();
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

  handleDelete = e => {
    const { id, colorTheme } = this.props;
    const { index } = colorTheme.toJS();
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
    if (id === index) {
      e.stopPropagation();
    }
  };

  render() {
    const { color, background, active, disRemove } = this.props;
    const { isRemove, NUM } = this.state;

    const liStyle = active
      ? Object.assign(
          {
            height: 'auto',
          },
          getSelectedStyle()
        )
      : { height: '31px' };
    const oneSetTheme = color.map((curr, index) => (
      <ColorItem
        key={index}
        id={index}
        color={curr}
        isDelete={background === '' || !!(index > NUM - 1)}
        isRemove={isRemove && !disRemove}
        onDeleteChange={this.handleDeleteChange}
        onCancelDelete={this.handleCancelDelete}
      />
    ));

    return (
      <li
        className="colorTheme-li"
        style={Object.assign({ background }, liStyle)}
        onClick={this.handleThemeChange}
      >
        {oneSetTheme}
        <span
          className="colorTheme-li-span colorTheme-li-icon"
          onClick={e => this.handleAdd(e)}
        >
          +
        </span>
        <span
          className="colorTheme-li-span colorTheme-li-icon"
          onClick={e => this.handleDelete(e)}
          style={isRemove ? { color: '#fff', background: '#424242' } : null}
        >
          -
        </span>
      </li>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorThemeItem);
