import './App.css';
import BottomNav from './components/BottomNav';
import UpperNav from './components/UpperNav';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
