import React from "react";
import "./MyCourses.css";

export default function MyCourses() {
  return (
    <div className="my-courses">
      <h2 className="section-title">Seus cursos em andamento</h2>
      <div className="carousel">
        <div className="carousel-card"></div>
        <div className="carousel-card"></div>
        <div className="carousel-card"></div>
        <div className="carousel-card"></div>
      </div>
    </div>
  )
}