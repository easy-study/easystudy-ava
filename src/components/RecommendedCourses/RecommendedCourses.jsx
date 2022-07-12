import React from "react";
import "./RecommendedCourses.css";

export default function RecommendedCourses() {
  return (
    <div className="recommended-courses">
      <h2 className="section-title">Cursos que podem ser do seu interesse</h2>
      <div className="carousel">

        <div className="carousel-card">
          <h3>HTML</h3>
          <span>R$89.80</span>
        </div>

        <div className="carousel-card">
          <h3>React</h3>
          <span>R$149.80</span>
        </div>

        <div className="carousel-card">
          <h3>Python</h3>
          <span>R$149.80</span>
        </div>
        
      </div>
    </div>
  )
}