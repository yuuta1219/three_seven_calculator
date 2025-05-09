import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../features/app'

const root = document.getElementById('root');
if (!root) {
  throw new Error('No root element');
}
createRoot(root).render(<App />);