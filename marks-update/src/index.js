import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserRegister from './register/userRegister';
import Login from './register/login';
import HomePage from './homePage';
import CreateStudent from './createStudent';
import UpdateStudent from './updateStudent';
import DeleteStudent from './deleteStudent';
import GetStudent from './getSingleStudent';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <h2 style={{ background: "black", color: "white", textAlign: "center" }}>Students Marks</h2>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/register' element={<UserRegister />} />
      <Route path='/login' element={<Login />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/createstudent" element={<CreateStudent />} />
      <Route path="/updatestudent" element={<UpdateStudent />} />
      <Route path="/deletestudent" element={<DeleteStudent />} />
      <Route path="/getstudent" element={<GetStudent />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
