import React, { Component } from 'react';
import Mask from 'components/Mask';
import Dialog from 'components/Dialog';
import Button from 'components/Button';
import Popup from 'components/Popup';
import logo from 'images/loop11-logo-green.svg';
import 'css/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showMask: false, showDialog: false, shared: false };
  }

  openShareVideo = (status) => {
    this.setState({ showMask: status, showDialog: status });
  }

  closeShareVideo = (status, shared, type, message) => {
    console.log(status, shared);
    this.setState({ showMask: status, showDialog: status, shared, type, message });
  }

  render() {
    const { showMask, showDialog, shared, message, type } = this.state;

    return (
      <div className="App">
        <div className="header">
          <img alt="loop 11 logo" src={logo} className="loop11-logo" />
        </div>
        <div className="center">
          {shared && <Popup type={type} message={message} />}
          {showMask && <Mask />}
          {showDialog && <Dialog action={this.closeShareVideo} />}
          <Button text="Click" action={() => this.openShareVideo(true)} />
        </div>
      </div>
    );
  }
}

export default App;
