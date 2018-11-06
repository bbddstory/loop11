import React, { Component } from 'react';
import Mask from 'components/Mask';
import Dialog from 'components/Dialog';
import Button from 'components/Button';
import logo from 'images/loop11-logo-green.svg';
import 'css/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showMask: false, showDialog: false };
  }

  showShareVideo = (status) => {
    this.setState({ showMask: status, showDialog: status });
  }

  hideShareVideo = (status) => {
    this.setState({ showMask: status, showDialog: status });
  }

  render() {
    const { showMask, showDialog } = this.state;

    return (
      <div className="App">
        <div className="header">
          <img alt="loop 11 logo" src={logo} className="loop11-logo" />
        </div>
        <div className="center">
          {showMask && <Mask />}
          {showDialog && <Dialog action={() => this.hideShareVideo(false)} />}
          <Button text="Click" action={() => this.showShareVideo(true)} />
        </div>
      </div>
    );
  }
}

export default App;
