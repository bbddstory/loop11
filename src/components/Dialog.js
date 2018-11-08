import * as React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import { postData } from 'utils/conn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'css/Dialog.scss';

export default class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channel: '' };
  }

  invokeAction = (shared, showPopup, type, message) => {
    this.props.action(shared, showPopup, type, message);
  }

  selectChannel = (channel) => {
    this.setState({ channel });
  }

  shareVideo = () => {
    const { channel } = this.state;

    if (channel) {
      postData({ channel }).then((data) => {
        if (data.statusCode === 200) {
          this.invokeAction(false, true, 'success', 'Video clip shared with Slack!');
        } else {
          this.invokeAction(true, true, data.body.status, data.body.error);
        }
      });
    }
  }

  render() {
    const { channel } = this.state;

    return (
      <div className="dialog">
        <div className="dialog-header">
          <span className="dialog-title">Share video clip</span>
          <span className="dialog-close" onClick={() => this.invokeAction(false, false)}>&times;</span>
        </div>
        <div className="dialog-center">
          <span className="text-bold">Select slack channel</span>
          <p>To share this clip, add email addresses separated by commas, then click &apos;Send&apos;.</p>
          <p>
            <span><span className="text-grey">Projects0001 Report / Task 2 /</span>&nbsp;Participant 4</span>
            <br />
            <span>
              <FontAwesomeIcon icon="video" className="arrow-down icon-grey" />
              Start<span className="text-grey video-time">2:30</span>End<span className="text-grey video-time">2:30</span>
            </span>
          </p>
          <Dropdown action={this.selectChannel} />
          <Button text="Share with Slack" disabled={!channel} classes="dialog-button" action={this.shareVideo} />
        </div>
      </div>
    );
  }
}

Dialog.propTypes = {
  action: PropTypes.func.isRequired,
};
