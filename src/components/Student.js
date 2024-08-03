import React from 'react';

const Student = () => {
  const students = [
    { id: '2300031005', name: 'Krishna', year: '2nd', department: 'CSE' },
    { id: '2300031420', name: 'Saneesh', year: '2nd', department: 'CSE' },
    { id: '2300031373', name: 'Sidhharth', year: '2nd', department: 'CSE' },
  ];

  return (
    <section>
      <h2>Students</h2>
      <div className="card-container">
        {students.map(student => (
          <div className="card" key={student.id}>
            <h3>{student.name}</h3>
            <p>ID: {student.id}</p>
            <p>Year: {student.year}</p>
            <p>Department: {student.department}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Student;
