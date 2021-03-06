import React from 'react';
import ReactDOM from 'react-dom';
import RadioMachine from './components/RadioMachine';
import * as serviceWorker from './utils/serviceWorker';
import 'normalize.css';

ReactDOM.render(<RadioMachine />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
