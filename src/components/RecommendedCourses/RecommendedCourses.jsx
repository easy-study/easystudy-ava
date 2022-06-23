import React from "react";
import "./RecommendedCourses.css";

export default function RecommendedCourses() {
  return (
    <div className="recommended-courses">
      <h2 className="section-title">Cursos que podem ser do seu interesse</h2>
      <div className="carousel">
        <div className="carousel-card"></div>
        <div className="carousel-card"></div>
        <div className="carousel-card"></div>
        <div className="carousel-card"></div>
      </div>
    </div>
  )
}