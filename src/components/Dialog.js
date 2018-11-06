import * as React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import 'css/Dialog.scss';

export default class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoName: '' };
  }

  takeAction = () => {
    this.props.action();
  }

  shareVideo = () => {
    console.log('-- Shared');
  }

  render() {
    // const { text } = this.props;

    return (
      <div className="dialog">
        <div className="dialog-header">
          <span className="dialog-title">Share video clip</span>
          <span className="dialog-close" onClick={this.takeAction}>&times;</span>
        </div>
        <div className="dialog-center">
          <div>Select slack channel</div>
          <div>To share this clip, add email addresses separated by commas, then click &apos;Send&apos;.</div>
          <div>Projects0001 Report / Task 2 / Participant 4</div>
          <Dropdown />
          <Button text="Share with Slack" classes="dialog-button" action={this.shareVideo} />
        </div>
      </div>
    );
  }
}

Dialog.propTypes = {
  // text: PropTypes.string.isRequired,
};
