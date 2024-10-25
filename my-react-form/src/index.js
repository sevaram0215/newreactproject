import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import ReactDOM from 'react-dom/client';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <PrimeReactProvider> <App /></PrimeReactProvider>
   
  </React.StrictMode>
);


reportWebVitals();
