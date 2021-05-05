import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import { chessmaksSettingProvider } from './components/chessmaks-setting-context';



ReactDOM.render(
  <React.StrictMode>
    {/* <chessmaksSettingProvider value = {}> */}
      <App />
    {/* </chessmaksSettingProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
