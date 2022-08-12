import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import PageLogin from './pages/PageLogin';
import UserAtendance from './pages/students/UserAtendance';
import UserID from './pages/students/UserID';
import Profile from './pages/students/Profile';
import ProfessorProfile from './pages/professors/ProfessorProfile';
import ProfessorMainPage from './pages/professors/ProfessorMainPage';
import GroupDetail from './pages/professors/GroupDetail';
import StudentDetails from './pages/professors/StudentDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<PageLogin/>}/> 
        <Route exact path='/user' element={<UserID/>}/> 
        <Route exact path='/profile' element= {<Profile/>}/>
        <Route exact path='/atendance' element={<UserAtendance/>}/>
        
        <Route exact path='/professor-profile' element={<ProfessorProfile/>}/>
        <Route exact path='/professor-main' element={<ProfessorMainPage/>}/>
        <Route exact path='/group/:group' element={<GroupDetail/>}/>
        <Route exact path='/group/:group/:student' element={<StudentDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;