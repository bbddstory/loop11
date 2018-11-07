import * as React from 'react';
import PropTypes from 'prop-types';
import 'css/Button.scss';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  takeAction = () => {
    this.props.action();
  }

  render() {
    const { text, classes } = this.props;

    return <button type="button" className={classes} onClick={this.takeAction}>{text}</button>;
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.string,
  action: PropTypes.func,
};
