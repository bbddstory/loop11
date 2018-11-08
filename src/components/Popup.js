import * as React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'css/Popup.scss';

export default class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  invokeAction = () => {
    this.props.action();
  }

  render() {
    const { type, message } = this.props;
    let icon = '';

    switch (type) {
      case 'success':
        icon = 'check-circle';
        break;
      case 'error':
        icon = 'exclamation-circle';
        break;
      default:
        icon = 'faInfoCircle';
        break;
    }

    return (
      <div className={`popup ${type}`}>
        <span className="popup-msg"><FontAwesomeIcon icon={icon} />&nbsp;{message}</span>
        <span className="popup-close" onClick={this.invokeAction}>&times;</span>
      </div>
    );
  }
}

Popup.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
