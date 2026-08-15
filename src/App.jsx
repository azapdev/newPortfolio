import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<div>Portfolio</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
