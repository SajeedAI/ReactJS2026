import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">

        {/* LEFT COLUMN */}
        <div className="left-content">
          <h1>Welcome to Maithrivanam Academy</h1>

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

        {/* RIGHT COLUMN FORM */}
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

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>About Our Edutech Platform</h2>
        <p>
          We combine traditional classroom excellence with modern technology.
          Our digital learning tools, smart assessments, and interactive
          sessions help students learn faster and smarter.
        </p>
      </section>

      {/* COURSES SECTION */}
      <section className="courses">
        <h2>Our Academic Programs</h2>

        <div className="course-grid">
          <div className="course-card">
            <h3>Primary School (1-5)</h3>
            <p>Strong foundation in Maths, English, Science & Logical Skills.</p>
          </div>

          <div className="course-card">
            <h3>Middle School (6-8)</h3>
            <p>Concept-based learning with weekly assessments & doubt sessions.</p>
          </div>

          <div className="course-card">
            <h3>High School (9-10)</h3>
            <p>Board exam preparation with test series and revision programs.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <h2>Why Choose Maithrivanam Academy?</h2>

        <div className="why-grid">
          <div className="why-box">
            <h3>📊 Smart Progress Tracking</h3>
            <p>Detailed performance reports for parents every month.</p>
          </div>

          <div className="why-box">
            <h3>🧠 Concept Clarity</h3>
            <p>We focus on understanding rather than memorization.</p>
          </div>

          <div className="why-box">
            <h3>👨‍🏫 Expert Mentors</h3>
            <p>Highly experienced teachers guiding every student personally.</p>
          </div>

          <div className="why-box">
            <h3>💻 Hybrid Learning</h3>
            <p>Offline classroom + Online support materials.</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta">
        <h2>Admissions Open for 2026</h2>
        <p>Limited seats available. Enroll now to secure your child’s future!</p>
        <button>Contact Us Today</button>
      </section>

    </div>
  );
};

export default Home;
