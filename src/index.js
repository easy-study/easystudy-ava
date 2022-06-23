import React from 'react';
import ReactDOM from 'react-dom/client';
import SideMenu from './components/SideMenu/SideMenu';
import TopBar from './components/TopBar/TopBar';
// import TopBanner from './components/TopBanner/TopBanner';
import MyCourses from './components/MyCourses/MyCourses';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <SideMenu />
      <div className='main'>
        <TopBar />
        {/* <TopBanner /> */}
        <MyCourses />
      </div>
    </div>
  </React.StrictMode>
);
