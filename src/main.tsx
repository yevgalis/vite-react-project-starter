import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router';
import 'normalize.css';
import './index.css';
import { App } from './app';

createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
  </Router>
);
