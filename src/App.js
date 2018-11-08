import React from 'react';
import Loadable from 'react-loadable';
import Loader from 'components/Loader';
import Mask from 'components/Mask';
import Button from 'components/Button';
import logo from 'images/loop11-logo-green.svg';
import 'css/App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faVideo, faCheckCircle, faExclamationCircle, faInfoCircle, faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faVideo, faCheckCircle, faExclamationCircle, faInfoCircle, faAngleDown);

// Code splitting
const Popup = Loadable({
  loader: () => import('components/Popup'),
  loading: Loader,
});

const Dialog = Loadable({
  loader: () => import('components/Dialog'),
  loading: Loader,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMask: false, showDialog: false, showPopup: false };
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  }

  toggleAll = (shared, showPopup, type, message) => {
    this.setState({ showMask: shared, showDialog: shared, showPopup, type, message });
  }

  render() {
    const { showMask, showDialog, showPopup, message, type } = this.state;

    return (
      <div className="App">
        <div className="header">
          <img alt="loop 11 logo" src={logo} className="loop11-logo" />
        </div>
        <div className="center">
          {showMask && <Mask />}
          {showPopup && <Popup type={type} message={message} action={this.togglePopup} />}
          {showDialog && <Dialog action={this.toggleAll} />}
          <Button text="Click" action={() => this.toggleAll(true, false)} />
        </div>
      </div>
    );
  }
}

export default App;
