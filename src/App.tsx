
import React from "react";
import './App.css';
import { HomePage } from  './pages/home.page'
import { ProjectPage } from './pages/project.page';
import ReactGA from "react-ga4";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { LoginPage } from './pages/login.page';

function App() {

  ReactGA.initialize("G-ZBM1991TJH");
  ReactGA.send("pageview");

  

  return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects/:name' element={<ProjectPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/dashboard' element={<ProjectPage />} />
          <Route path='*' element={<>NotFound</>} />
        </Routes>
      </Router>
  );
}

export default App;
