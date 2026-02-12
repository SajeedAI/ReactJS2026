import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Maithrivanam Academy</h1>
          <p>Empowering Students from Class 1 to 10 with Smart Learning</p>

          <div className="hero-buttons">
            <button className="btn-primary">Enroll Now</button>
            <button className="btn-secondary">View Courses</button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>Why Choose Us?</h2>
        <p>
          We provide high-quality education with experienced teachers,
          personalized mentoring, and modern learning methods for school
          students.
        </p>
      </section>

      {/* COURSES SECTION */}
      <section className="courses">
        <h2>Our Programs</h2>

        <div className="course-grid">
          <div className="course-card">Class 1 - 5</div>
          <div className="course-card">Class 6 - 8</div>
          <div className="course-card">Class 9 - 10</div>
          <div className="course-card">Foundation Courses</div>
        </div>
      </section>

    </div>
  );
};

export default Home;
