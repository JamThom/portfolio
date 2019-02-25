import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './fonts/index.css'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-133839923-1');
ReactGA.pageview(window.location.pathname);

ReactDOM.render(<App />, document.getElementById('app'));
