import React from 'react'
import Student from './Student'
import '../scss/StudentList.scss';

function StudentList({students}){
  return(
    <div className="student-list">
      <h3>학생 리스트입니다.</h3>
      <ul>
        {
          students.map((student)=>{
            return <Student student={student} key={student._id}></Student>
          })
        }
      </ul>
    </div>
  )
}

export default StudentList;