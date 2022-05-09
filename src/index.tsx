import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';

ReactDOM.render(
  <React.StrictMode>
    <DefaultLayout>
      <App />
    </DefaultLayout>
  </React.StrictMode>,
  document.getElementById('root')
);
