import React, { useState } from 'react'
import '../scss/AddStudent.scss';
import axios from 'axios';

function AddStudent(){
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [belong, setBelong] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');

  const [success, setSuccess] = useState(false);

  const addStudent = (e)=>{
    e.preventDefault();
    axios.post("http://127.0.0.1:9999/student/add",{
      id,
      name,
      belong,
      phone,
      status
    })
    .then(res=>{
      if(res.status === 200){
        setSuccess(true);
      }
    })
  }
  return (
    <div className="add-student">
      <form method='post'>
        <label htmlFor="id">아이디 : </label>
        <input type="text" name="id" id="id" onChange={(e)=>{setId(e.target.value)}}/>

        <label htmlFor="name">이름 : </label>
        <input type="text" name="name" id="name" onChange={(e)=>{setName(e.target.value)}}/>

        <label htmlFor="belong">소속 : </label>
        <input type="text" name="belong" id="belong"  onChange={(e)=>{setBelong(e.target.value)}}/>

        <label htmlFor="phone">전화번호 : </label>
        <input type="text" name="phone" id="phone"  onChange={(e)=>{setPhone(e.target.value)}}/>

        <label htmlFor="status">직급 : </label>
        <input type="text" name="status" id="status"  onChange={(e)=>{setStatus(e.target.value)}}/>

        <button onClick={addStudent}>추가</button>        
      </form>
      {
        success?(
          <div>추가 완료!</div>
        ):(
          <></>
        )
      }
    </div>
  )
}

export default AddStudent;