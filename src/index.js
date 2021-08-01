import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@elastic/eui/dist/eui_theme_light.css';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
,
  document.getElementById('root')
);


