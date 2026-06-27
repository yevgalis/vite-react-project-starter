import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { Header } from '@/components/header';
import './app.css';

const AppComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <Header />
      <h1 className="title">Vite + React</h1>
      <div className="card">
        <button className="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<AppComponent />} />
    </Routes>
  );
};
