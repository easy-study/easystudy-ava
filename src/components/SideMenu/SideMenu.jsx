import {home, courses, schedule, support, settings} from "../../assets/icons/icons";
import { Link } from "react-router-dom";
import "./SideMenu.css";

function SideMenu() {
  return (
    <aside>
      <h1 className="logo">Easy Study</h1>
      <nav>
        <div className="top">
          <Link to="/" className="nav-btn"><img src={home} alt="home" />Início</Link>
          <Link to="/meus-cursos" className="nav-btn"><img src={courses} alt="courses" />Meus Cursos</Link>
          <Link to="/agenda" className="nav-btn"><img src={schedule} alt="schedule" />Agenda</Link>
          <Link to="/suporte" className="nav-btn"><img src={support} alt="support" />Suporte</Link>
        </div>

        <div className="bottom">
        <Link to="/configuracoes" className="nav-btn"><img src={settings} alt="settings" />Configurações</Link>
        </div>
      </nav>
    </aside>
  );
}

export default SideMenu;
