import * as React from 'react';
import PropTypes from 'prop-types';
import 'css/Button.scss';

export default class Button extends React.Component {
  invokeAction = () => {
    this.props.action();
  }

  render() {
    const { disabled, classes, text } = this.props;

    return <button type="button" disabled={disabled} className={classes} onClick={this.invokeAction}>{text}</button>;
  }
}

Button.defaultProps = {
  disabled: false,
  classes: '',
};

Button.propTypes = {
  disabled: PropTypes.bool,
  classes: PropTypes.string,
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
