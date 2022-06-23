import React from "react";
import "./TopBar.css";
import {menu, user} from "../../assets/icons/icons";

export default function TopBar() {
  return (
    <>
      <div className="topbar">
      <div className="menu-btn"><img src={menu} alt="menu" /></div>
          <h1 className="user-welcome">Bem-vindo de volta, User!</h1>
          <img className="user-image" src={user} alt="imagem do usuário"></img>
      </div>
    </>
  )
} 