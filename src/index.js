import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'css/normalize.scss';
import 'css/index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faVideo, faCheckCircle, faExclamationCircle, faInfoCircle, faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faVideo, faCheckCircle, faExclamationCircle, faInfoCircle, faAngleDown);

ReactDOM.render(<App />, document.getElementById('root'));
