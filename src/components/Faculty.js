import React from 'react';
import './Faculty.css'; // Import the CSS file for faculty styling

const Faculty = () => {
  const facultyMembers = [
    { id: '5566', name: 'Hanumanta Rao', department: 'CSE' },
    { id: '5587', name: 'MVD', department: 'ECE' },
    { id: '7734', name: 'M. LATHA', department: 'ENGLISH' },
    { id: '6923', name: 'E.Aghilesh', department: 'ECE' },
    { id: '7456', name: 'Pradeep Singh', department: 'Biology' },
  ];

  return (
    <section>
      <h2>Faculty</h2>
      <div className="faculty-container">
        {facultyMembers.map(member => (
          <div key={member.id} className="faculty-card">
            <h3>{member.name}</h3>
            <p>Faculty ID: {member.id}</p>
            <p>Department: {member.department}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faculty;
