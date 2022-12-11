import React from 'react';
// import ReactDOM from 'react-dom/client'; //<- This import is only for React version 18
import { render } from 'react-dom'; // <- This is the correct import statement for React version 17
import './index.css';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import App from './App.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = document.getElementById('root'); // <- This is the correct method call for React version 17
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);  
