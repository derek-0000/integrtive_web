import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import PageLogin from './pages/PageLogin';
import UserAtendance from './pages/students/UserAtendance';
import UserID from './pages/students/UserID';
import Profile from './pages/students/Profile';
import ProfessorProfile from './pages/professors/ProfessorProfile';
import ProfessorMainPage from './pages/professors/ProfessorMainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PageLogin/>}/> 
        <Route path='/user' element={<UserID/>}/> 
        <Route path='/profile' element= {<Profile/>}/>
        <Route path='/atendance' element={<UserAtendance/>}/>
        <Route path='/professor-profile' element={<ProfessorProfile/>}/>
        <Route path='/professor-main' element={<ProfessorMainPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;