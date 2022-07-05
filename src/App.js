import React from 'react'
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import UserProfile from './pages/UserProfile';
import UserAtendance from './pages/UserAtendance';
import UserID from './pages/UserID';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' element= {<UserID/>}/>
        <Route path='/profile' element= {<UserProfile/>}/>
        <Route path='/atendance' element={<UserAtendance/>}/>
      </Routes>
    </Router>

  );
}

export default App;