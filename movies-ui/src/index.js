import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './assets/_overrides.scss';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css';
import 'primeflex/src/_variables.scss';
import 'primeflex/src/_elevation.scss';
// import 'primeflex/src/_grid.scss';
// import 'primeflex/src/_formlayout.scss';
// import 'primeflex/src/_display.scss';
// import 'primeflex/src/_text.scss';
// import 'primeflex/src/flexbox/_flexbox.scss';
// import 'primeflex/src/_spacing.scss';

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
