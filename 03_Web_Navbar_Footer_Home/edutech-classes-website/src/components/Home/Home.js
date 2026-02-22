import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">

        <div className="left-content">
          <h2 className="crazy-title">Maithrivanam Academy</h2>

          <p>
            Maithrivanam Academy provides quality education from Class 1 to 10.
            Our mission is to build strong foundations with experienced teachers
            and personalized attention.
          </p>

          <ul>
            <li>✔ Experienced & Qualified Faculty</li>
            <li>✔ Small Batch Size</li>
            <li>✔ Weekly Tests & Progress Reports</li>
            <li>✔ Personal Mentoring</li>
            <li>✔ Focus on Concept Clarity</li>
          </ul>
        </div>

        <div className="right-form">
          <h2>Student Enrollment</h2>

          <form className="enroll-form">
            <input type="text" placeholder="Student Name" required />
            <input type="text" placeholder="Parent Name" required />
            <input type="tel" placeholder="Mobile Number" required />

            <select required>
              <option value="">Select Class</option>
              <option>Class 1 - 5</option>
              <option>Class 6 - 8</option>
              <option>Class 9 - 10</option>
            </select>

            <button type="submit">Enroll Now</button>
          </form>
        </div>

      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Our Edutech Platform</h2>
        <p>
          We combine classroom excellence with modern technology.
          Smart assessments and interactive sessions help students
          learn faster and smarter.
        </p>
      </section>

      {/* COURSES */}
      <section className="courses">
        <h2>Our Academic Programs</h2>

        <div className="course-grid">
          <div className="course-card">
            <h3>Primary School (1-5)</h3>
            <p>Strong foundation in Maths, English & Science.</p>
          </div>

          <div className="course-card">
            <h3>Middle School (6-8)</h3>
            <p>Concept-based learning with weekly assessments.</p>
          </div>

          <div className="course-card">
            <h3>High School (9-10)</h3>
            <p>Board exam preparation with revision programs.</p>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="locations">
        <h2>Our Branch Locations</h2>

        <div className="location-grid">

          <div className="location-card active">
            <h3>📍 Naspur</h3>
            <p><strong>Present Branch</strong></p>
            <p>Fully operational with smart classrooms.</p>
          </div>

          <div className="location-card upcoming">
            <h3>🚀 Mancherial</h3>
            <p><strong>Upcoming</strong></p>
          </div>

          <div className="location-card upcoming">
            <h3>🚀 Bellampally</h3>
            <p><strong>Upcoming</strong></p>
          </div>

          <div className="location-card upcoming">
            <h3>🚀 Asifabad</h3>
            <p><strong>Upcoming</strong></p>
          </div>

          <div className="location-card upcoming">
            <h3>🚀 Chennu</h3>
            <p><strong>Upcoming</strong></p>
          </div>

          <div className="location-card upcoming">
            <h3>🚀 Karimnagar</h3>
            <p><strong>Upcoming</strong></p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Admissions Open for 2026</h2>
        <p>Limited seats available. Enroll now!</p>
        <button>Contact Us Today</button>
      </section>

    </div>
  );
};

export default Home;
