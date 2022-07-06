import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import UserAtendance from './pages/UserAtendance';
import UserID from './pages/UserID';
import Profile from './pages/Profile';
import ProfessorProfile from './pages/ProfessorProfile';
import PageLogin from './pages/PageLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PageLogin/>}/> 
        <Route path='/user' element={<UserID/>}/> 
        <Route path='/profile' element= {<Profile/>}/>
        <Route path='/atendance' element={<UserAtendance/>}/>
        <Route path='/prof' element={<ProfessorProfile/>}/>
      </Routes>
    </Router>
  );
}

export default App;