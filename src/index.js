//index.js
import React from 'react';
import './css/style.css';
import App from './App';
import {createRoot} from "react-dom/client";

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


