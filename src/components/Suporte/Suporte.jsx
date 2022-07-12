import React from "react";
import "./Suporte.css";
import { support2 } from "../../assets/icons/icons";

export default function Suporte() {
  return (
    <>
    <h1 className="support-title">Entre em contato conosco:</h1>
      <form action="">
        <img src={support2} alt="suporte" />

        <label htmlFor="text">
          Título: <br />
          <input type="text" name="text" />
        </label>

        <label htmlFor="message">
          Mensagem: <br />
          <textarea name="message" id="message"></textarea>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </>
  )
}
