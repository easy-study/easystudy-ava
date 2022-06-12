import React from 'react';
import ReactDOM from 'react-dom/client';
import AsideMenu from './components/AsideMenu/AsideMenu';
import TopBar from './components/TopBar/TopBar';
import TopBanner from './components/TopBanner/TopBanner';
import MyCourses from './components/MyCourses/MyCourses';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <AsideMenu />
      <div className='main'>
        <TopBar />
        <TopBanner />
        <MyCourses />
      </div>
    </div>
  </React.StrictMode>
);
