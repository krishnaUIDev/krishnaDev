import React from 'react';
import ReactDOM from 'react-dom/client';
import { ComputersCanvas } from './components/canvas';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <section className={`relative w-full h-screen mx-auto`}>
      <ComputersCanvas />
    </section>
  </React.StrictMode>
);
