import React from 'react';
import './Courses.css'; // Import the CSS file for course styling

const Courses = () => {
  return (
    <section className="course-section">
      <h2>Courses</h2>
      <div className="course-container">
        <div className="course-card">
          <div className="card-inner">
            <div className="card-front">
              <p>Database Management System</p>
            </div>
            <div className="card-back">
              <ul>
                <li>Course code: CS101</li>
                <li>L</li>
                <li>L-T-P-S: 3-0-2-4</li>
                <li>Credits: 6</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="course-card">
          <div className="card-inner">
            <div className="card-front">
              <p>Network Protocol System</p>
            </div>
            <div className="card-back">
              <ul>
                <li>Course code: MA202</li>
                <li>L-T-P-S: 4-0-0-4</li>
                <li>Credits: 4</li>
              </ul>
            </div>
          </div>
 service
         </div>
        <div className="course-card">
          <div className="card-inner">
            <div className="card-front">
              <p>Design Data Analysis</p>
            </div>
            <div className="card-back">
              <ul>
                <li>Course code: PH303</li>
                <li>L-T-P-S: 3-0-0-3</li>
                <li>Credits: 7</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
