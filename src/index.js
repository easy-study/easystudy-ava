import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SideMenu from './components/SideMenu/SideMenu';
import TopBar from './components/TopBar/TopBar';
import MyCourses from './components/MyCourses/MyCourses';
import RecommendedCourses from './components/RecommendedCourses/RecommendedCourses';
import './index.css';
import './responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <div className="container">
        <SideMenu />
        <div className='main'>
          <TopBar />
          <Routes>
            <Route path='/meus-cursos' element = {<MyCourses />}></Route>
          </Routes>
          <RecommendedCourses />
        </div>
      </div>
    </React.StrictMode>
  </BrowserRouter>
);
