import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './utils/serviceWorker';
import { colorMode } from './utils/colorMode';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App colorMode={colorMode} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
