import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AlertProvider } from './context/alertContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AlertProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AlertProvider>
);
