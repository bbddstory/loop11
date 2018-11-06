import * as React from 'react';
import PropTypes from 'prop-types';
import 'css/Dropdown.scss';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showList: false };
  }

  showList = () => {
    this.setState({ showList: !this.state.showList });
  }

  render() {
    const { showList } = this.state;

    return (
      <React.Fragment>
        <div className="dropdown-container">
          <input type="text" name="FirstName" value="Mickey" readOnly onClick={this.showList} />
          {showList && (
            <div className="scroll-container">
              <div className="list-container">
                <ul>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                  <li>Coke</li>
                  <li>Spirit</li>
                  <li>Beer</li>
                  <li>Coco</li>
                  <li>Chai</li>
                  <li>Wine</li>
                  <li>Juice</li>
                  <li>Water</li>
                  <li>Pepsi</li>
                  <li>Sprite</li>
                  <li>Fanta</li>
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
