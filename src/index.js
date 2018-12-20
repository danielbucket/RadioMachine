import React from 'react';
import ReactDOM from 'react-dom';
import Radio_Machine from './components/Radio_Machine';
import * as serviceWorker from './utils/serviceWorker';
import 'normalize.css';

ReactDOM.render(<Radio_Machine />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
