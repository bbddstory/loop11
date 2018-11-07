import * as React from 'react';
import PropTypes from 'prop-types';
import 'css/Popup.scss';

export default class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type, message } = this.props;

    return <div className={`popup ${type}`}>{message}</div>;
  }
}

Popup.propTypes = {
  // text: PropTypes.string.isRequired,
  // classes: PropTypes.string,
  // action: PropTypes.func,
};
