import * as React from 'react';
import PropTypes from 'prop-types';
import { getData } from 'utils/conn';

import 'css/Dropdown.scss';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showList: false, data: [], channel: '' };
  }

  componentDidMount() {
    try {
      const promise = getData();
      promise.then(data => this.setState({ data: data.channels }));
    } catch (err) {
      console.log(err);
    }
  }

  showList = () => {
    this.setState({ showList: !this.state.showList });
  }

  handleClick = (e) => {
    const name = e.target.getAttribute('data-name');

    this.setState({ channel: name });
    this.props.action(name);
  }

  render() {
    const { showList, data, channel } = this.state;

    return (
      <React.Fragment>
        <div className="dropdown-container">
          <input type="text" placeholder="Select" value={channel} readOnly onClick={this.showList} />
          {showList && (
            <div className="scroll-wrap">
              <div className="list-container">
                <ul>
                  <li className="optGroup">Channels</li>
                  {data.map(el => <li key={el.name} data-name={el.name} onClick={e => this.handleClick(e)}>{el.name}</li>)}
                </ul>
              </div>
            </div>)}
        </div>
      </React.Fragment>
    );
  }
}

Dropdown.propTypes = {
//   text: PropTypes.string.isRequired,
//   classes: PropTypes.string,
//   openDialog: PropTypes.func,
};
