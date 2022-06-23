import React from 'react';
import ReactDOM from 'react-dom/client';
import SideMenu from './components/SideMenu/SideMenu';
import TopBar from './components/TopBar/TopBar';
import MyCourses from './components/MyCourses/MyCourses';
import RecommendedCourses from './components/RecommendedCourses/RecommendedCourses';
import './index.css';
import './responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <SideMenu />
      <div className='main'>
        <TopBar />
        <MyCourses />
        <RecommendedCourses />
      </div>
    </div>
  </React.StrictMode>
);
