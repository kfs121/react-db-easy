import React, { useEffect, useState } from "react";
import StudentList from "./StudentList";
import AddStudent from './AddStudent'
import axios from "axios";


function Main() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:9999/student").then((res) => {
      setStudents(res.data);
    });
  }, []);
  console.log(students);
  return (
    <main>
      <div className="inner">
        <AddStudent></AddStudent>
        <StudentList students={students}></StudentList>
      </div>
    </main>
  );
}

export default Main;
