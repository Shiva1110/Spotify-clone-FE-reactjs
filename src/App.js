import React from 'react';
import './App.css';
import Landing from './Landing';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
