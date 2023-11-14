import React from 'react';
import '../scss/Student.scss';

function Student({student}){
  return (
    <li>
      <span className='id'>{student._id}</span>
      <span className="name">{student.name}</span>
      <span className="belong">{student.belong}</span>
      <span className="phone">{student.phone}</span>
      <span className="status">{student.status}</span>
    </li>
  )
}

export default Student;