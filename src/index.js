import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'

import './index.scss';
import App from './components/App';
import {ContextProvider} from './Context'
import ScrollToTop from './scrollToTop'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>
);

