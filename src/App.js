import React from 'react';
import './App.css';
import Landing from './Landing';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
