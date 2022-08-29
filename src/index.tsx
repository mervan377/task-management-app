import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import { Provider, teamsTheme } from '@fluentui/react-northstar'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Provider theme={teamsTheme}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

reportWebVitals();
