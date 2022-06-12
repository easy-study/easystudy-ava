import React from "react";
import {home, courses, schedule, support, settings} from "./assets/icons/icons";
import "./StudentDashboard.css";

function App() {
  return (
    <aside>
      <h1 className="logo">Easy Study</h1>
      <nav>
        <div className="top">
          <button className="nav-btn"><img src={home} alt="home" />Início</button>
          <button className="nav-btn"><img src={courses} alt="courses" />Meus Cursos</button>
          <button className="nav-btn"><img src={schedule} alt="schedule" />Agenda</button>
          <button className="nav-btn"><img src={support} alt="support" />Suporte</button>
        </div>

        <div className="bottom">
          <button className="nav-btn"><img src={settings} alt="settings" />Configurações</button>
        </div>
      </nav>
    </aside>
  );
}

export default App;
