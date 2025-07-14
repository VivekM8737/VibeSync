// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './assets/Components/Profile';
import Matches from './assets/Components/Matches';

const API = 'http://localhost:5000';

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center p-10 text-gray-800">
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/matches" element={<Matches />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
